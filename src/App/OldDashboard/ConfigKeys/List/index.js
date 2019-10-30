import React, { Component } from 'react';
import reduxComponent from 'reduxComponent'; // eslint-disable-line
import {
    Button,
    Card,
    CardTitle,
    CardText,
    DataTable,
    Dialog,
    DialogActions,
    DialogContent,
    FABButton,
    TableHeader,
    Textfield,
    Menu,
    MenuItem
} from 'react-mdl';
import { MdAdd, MdMoreVert } from 'react-icons/md';
import Spinner from 'ui/Spinner';
import { withClipboard, ClipboardCopyButton } from 'DashboardComponents/Clipboard';
import Api from 'AppUtils/Api';
import ExportLink from '../../components/ExportLink';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDeleteConfirmDialog: false,
      openCreateConfigKeyDialog: false,
      configKeyIdForAction: '',
      configKey: '',
      label: '',
      summary: ''
    };
  }

  toggleClipboardPasteBox = () => this.setState({ openClipboardPasteBox: !this.state.openClipboardPasteBox });

  handleInputChange = (name, event) => this.setState({
    ...this.state,
    [name]: event.target.value
  });

  handleCreateClick = () => {
    const { updateState } = this.props;
    const { configKey, label, summary } = this.state;
    this.setState({ creatingConfigKey: true });
    Api.post('/create-config-key', { data: JSON.stringify({ configKey, label, summary }) })
      .then(({ payload }) => {
        this.setState({ creatingConfigKey: false });
        updateState(state =>
          ({ configKeys: [payload.configKey, ...state.configKeys] }));
        this.closeCreateConfigKeyDialog();
      }).catch(createConfigKeyError => this.setState({
        createConfigKeyError,
        creatingConfigKey: false
      }));
  };

  handleDeleteClick = () => {
    const { updateState } = this.props;
    const id = this.state.configKeyIdForAction;
    this.setState({ deletingConfigKey: true });
    Api.post('/delete-config-key', { id })
      .then(() => {
        this.setState({ deletingConfigKey: false });
        updateState(state =>
          ({ configKeys: state.configKeys.filter(conf => conf.id !== id) }));
        this.closeDeleteConfirmDialog();
      }).catch(deleteConfigKeyError => this.setState({
        deleteConfigKeyError,
        deletingConfigKey: false
      }));
  };

  openCreateConfigKeyDialog = () => this.setState({
    ...this.state,
    openCreateConfigKeyDialog: true,
  });

  closeCreateConfigKeyDialog = () => this.setState({
    ...this.state,
    openCreateConfigKeyDialog: false,
    configKey: '',
    label: '',
    summary: ''
  });

  openDeleteConfirmDialog = (configKeyId) => this.setState({
    ...this.state,
    openDeleteConfirmDialog: true,
    configKeyIdForAction: configKeyId
  });

  closeDeleteConfirmDialog = () => this.setState({
    ...this.state,
    openDeleteConfirmDialog: false,
    configKeyIdForAction: null,
    deleteConfigKeyError: null,
    createConfigKeyError: null
  });

  handleDuplicateKey = id => {
    const { updateState } = this.props;
    this.setState({ duplicatingConfigKey: true });
    Api.post('/duplicate-config-key', { id })
      .then(({ payload }) => {
        this.setState({ duplicatingConfigKey: false });
        updateState(state => {
          const configKeys = [...state.configKeys];
          const ogIndex = configKeys.map((s, i) =>
            s.id === id ? i : null).filter(i => i !== null)[0] || 0;
          configKeys.splice(ogIndex + 1, 0, payload.configKey);
          return { configKeys };
        });
      }).catch(duplicateConfigKeyError => this.setState({
        duplicateConfigKeyError,
        duplicatingConfigKey: false
      }));
  };

  // TODO: Fix margin top to be more generic for all content
  render() {
    const { configKeys } = this.props;
    const {
      configKey,
      label,
      summary,
      deletingConfigKey,
      deleteConfigKeyError,
      creatingConfigKey,
      createConfigKeyError
    } = this.state;

    const styles = {
      container: {
        display: 'flex',
        boxSizing: 'border-box',
        justifyContent: 'center',
        height: '100%'
      },
      table: { width: '780px' },
      fab: {
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 900
      }
    };

    const createConfigKeyDialog = (
      <Dialog
        open={this.state.openCreateConfigKeyDialog}
        style={{ width: '540px' }}
      >
        <DialogContent>
          <Textfield
            style={{ width: '100%' }}
            floatingLabel
            label='Key'
            onChange={this.handleInputChange.bind(this, 'configKey')}
            value={configKey}
          />

          <Textfield
              style={{ width: '100%' }}
              floatingLabel
              label='Label'
              onChange={this.handleInputChange.bind(this, 'label')}
              value={label}
          />

          <Textfield
              style={{ width: '100%' }}
              floatingLabel
              label='Summary'
              onChange={this.handleInputChange.bind(this, 'summary')}
              value={summary}

          />
          {createConfigKeyError ?
            <div className="ui__dangerColor ui__textAlign_center">
              {createConfigKeyError.msg || createConfigKeyError.message
                || JSON.stringify(createConfigKeyError)}
            </div>
            :
            null}
        </DialogContent>
        <DialogActions>
          {[
            creatingConfigKey ? null :
              <Button type='button' onClick={this.handleCreateClick} accent>Create</Button>,
            creatingConfigKey ? null :
              <Button type='button' onClick={this.closeCreateConfigKeyDialog}>Cancel</Button>,
            creatingConfigKey ? <Spinner size={25} /> : null
          ].map((child, i) => child && React.cloneElement(child, { key: i }))}
        </DialogActions>
      </Dialog>
    );

    const confirmDeleteDialog = (
      <Dialog open={this.state.openDeleteConfirmDialog}>
        {[
          <DialogContent>
            {deletingConfigKey ?
              <Spinner className="ui__flex ui__justifyContent_center" />
              :
              <div>
                {deleteConfigKeyError ?
                  <div className="ui__dangerColor">{deleteConfigKeyError.msg || deleteConfigKeyError.message
                    || JSON.stringify(deleteConfigKeyError)}</div>
                  :
                  <p>Are you sure you want to delete this configuration key?</p>}
              </div>}
          </DialogContent>,
          deletingConfigKey ? null :
            <DialogActions>
              <Button type='button' onClick={this.handleDeleteClick} accent>Delete</Button>
              <Button type='button' onClick={this.closeDeleteConfirmDialog}>Cancel</Button>
            </DialogActions>
        ].map((child, i) => child && React.cloneElement(child, { key: i }))}
      </Dialog>
    );

    const renderItemActionButton = (id, rowData, index) => {
      //return <IconButton name="edit" onClick={this.handleEditUserClick.bind(this, configKeyId)}/>;
      const menuId = `more-user-action-menu${index}`;
      return (
        <div>
          <div
            style={{ position: 'relative', color: '#999999' }}
            className="ui__flex ui__alignItems_center"
          >
            {/*<div
              className="ui__cursor_pointer"
              onClick={this.handleEditConfigKeyClick.bind(this, id)}
            >
              <MdCreate style={{ fontSize: '24px' }} />
            </div>*/}&nbsp;
            <div id={menuId} className="ui__cursor_pointer">
              <MdMoreVert style={{ fontSize: '24px' }} />
            </div>
            <Menu target={menuId} align="right">
                <MenuItem onClick={this.openDeleteConfirmDialog.bind(this, id)}>
                  Delete
                </MenuItem>
                {/*<MenuItem onClick={() => this.handleDuplicateKey(id)}>
                  Duplicate
                </MenuItem>
                <MenuItem>
                  <ClipboardCopyButton
                    data={{ dataId: id, dataType: 'configKey' }}
                  >
                    <span>Copy</span>
                  </ClipboardCopyButton>
                </MenuItem>*/}
                <MenuItem>
                  <ExportLink options={{ configKey: id }} />
                </MenuItem>
            </Menu>
          </div>
        </div>
      );
    };

    const renderTable = (
      <div>
        <DataTable
          style={{ width: '780px' }} shadow={0}
          rows={configKeys.map(key => ({ id: key.id, ...key.data }))}
        >
          <TableHeader name='configKey'>Key</TableHeader>
          <TableHeader name='label'>Label</TableHeader>
          <TableHeader name='summary'>Summary</TableHeader>
          <TableHeader name='id' style={{ width: '32px' }} cellFormatter={renderItemActionButton} />
        </DataTable>
      </div>
    );

    const renderEmptyTable = (
        <Card shadow={0} style={{ width: '420px' }}>
          <CardTitle>There are no configuration keys</CardTitle>
          <CardText>
            <span>To create your first configuration key click on the orange icon at the bottom right of the window.</span>
            <br /><br /><br />
          </CardText>
          {/*<CardActions border>*/}
              {/*<Button onClick={this.openCreateConfigKeyDialog} colored>ADD CONFIGURATION KEY</Button>*/}
          {/*</CardActions>*/}
        </Card>
    );

    return (
      <div>
        <FABButton style={styles.fab} colored ripple onClick={this.openCreateConfigKeyDialog}>
            <MdAdd style={{ fontSize: '24px' }} />
        </FABButton>
        <div style={styles.container}>
            {(configKeys && configKeys.length > 0) ? renderTable : renderEmptyTable}
        </div>
        {createConfigKeyDialog}
        {confirmDeleteDialog}
      </div>
    );
  }
}

export default withClipboard(['configKey'])(List);
