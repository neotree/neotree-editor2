import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    Card,
    CardText,
//    DataTable,
    Dialog,
    DialogActions,
    DialogContent,
    IconButton,
    Radio,
    RadioGroup,
//    TableHeader,
//    Textfield
} from 'react-mdl';
import { Table, TableHeader } from '../../datatable';
import Toolbar from 'Toolbar';  // eslint-disable-line
import { arrayMove } from 'App/utils'; // eslint-disable-line
import { DEFAULT_SCREEN_TYPE, ScreenType } from 'App/constants'; // eslint-disable-line
import Spinner from 'ui/Spinner'; // eslint-disable-line

/*eslint-disable quotes*/
/*eslint-disable quote-props*/
/*eslint-disable key-spacing*/

class Display extends Component {
  state = {
    openSelectScreenTypeDialog: false,
    screens: [],
    addScreenType: DEFAULT_SCREEN_TYPE
  };

  handleAddScreenClick = () => {
    const { actions, scriptId, history } = this.props;
    const { addScreenType } = this.state;

    this.setState({ addingScreen: false });
    actions.post('create-screen', {
      script_id: scriptId,
      type: addScreenType,
      onResponse: () => this.setState({ addingScreen: false }),
      onFailure: addScreenError => this.setState({ addScreenError }),
      onSuccess: ({ payload }) => {
        actions.updateApiData(({ screen: payload.screen }));
        history.push(`/dashboard/scripts/${scriptId}/screens/${payload.screen.id}`);
        this.closeSelectScreenTypeDialog();
      }
    });
  };

  handleDeleteScreenClick = id => () => {
    const { actions, scriptId } = this.props;
    this.setState({ deletingScreen: false });
    actions.post('delete-screen', {
      id,
      scriptId,
      onResponse: () => this.setState({ deletingScreen: false }),
      onFailure: deleteScreenError => this.setState({ deleteScreenError }),
      onSuccess: () => {
        actions.updateApiData(state =>
          ({ screens: state.screens.filter(scr => scr.id !== id) }));
      }
    });
  };

  handleEditScreenClick = index => () => this.props.onEditScreenClick(index);

  handleInputChange = (name, e) => this.setState({ [name]: e.target.value });

  openSelectScreenTypeDialog = () => this.setState({ openSelectScreenTypeDialog: true });

  closeSelectScreenTypeDialog = () => this.setState({
      openSelectScreenTypeDialog: false,
      addScreenTitle: null,
      addScreenType: DEFAULT_SCREEN_TYPE
  });

  swapScreenItems = (oldIndex, newIndex) => {
      const { screens } = this.props;
      const updatedScreens = arrayMove([...screens], oldIndex, newIndex);
      const { actions } = this.props;
      this.setState({ sortingScreens: false });
      actions.post('update-screens', {
        returnUpdated: true,
        screens: updatedScreens.map((scr, i) => ({ id: scr.id, position: i })),
        onResponse: () => this.setState({ sortingScreens: false }),
        onFailure: deleteScriptError => this.setState({ deleteScriptError }),
        onSuccess: ({ payload }) => actions.updateApiData({ screens: payload.screens })
      });
  };

  // TODO: Fix margin top to be more generic for all content
  render() {
    const { screens } = this.props;
    const { addScreenType } = this.state;
    const styles = {
      screens: { marginTop: '24px', width: '780px' },
      table: { width: '100%' },
      emptyMessageContainer : {
        display: 'flex',
        boxSizing: 'border-box',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#757575',
        fontSize: '16px'
      }
    };

    const renderItemActions = id => {
      return (
        <div style={{ display: 'flex', flexDirection:'row', alignContent: 'end', color: "#999999" }}>
          <IconButton name="edit" onClick={this.handleEditScreenClick(id)} />
          <IconButton name="delete" onClick={this.handleDeleteScreenClick(id)} />
        </div>
      );
    };

    const selectScreenTypeDialog = (
      <Dialog open={this.state.openSelectScreenTypeDialog} style={{ width: '260px' }}>
        <DialogContent>
          <p>Select screen type:</p>
          <RadioGroup
            container="div"
            childContainer="div"
            name="addScreenType"
            value={addScreenType || DEFAULT_SCREEN_TYPE}
            onChange={this.handleInputChange.bind(this, 'addScreenType')}
          >
            <Radio value={ScreenType.CHECKLIST} ripple>Checklist</Radio>
            <Radio value={ScreenType.FORM} ripple>Form</Radio>
            <Radio value={ScreenType.MANAGEMENT} ripple>Management</Radio>
            <Radio value={ScreenType.MULTI_SELECT} ripple>Multiple choice list</Radio>
            <Radio value={ScreenType.LIST} ripple>Simple list</Radio>
            <Radio value={ScreenType.SINGLE_SELECT} ripple>Single choice list</Radio>
            <Radio value={ScreenType.PROGRESS} ripple>Progress</Radio>
            <Radio value={ScreenType.TIMER} ripple>Timer</Radio>
            <Radio value={ScreenType.YESNO} ripple>Yes/No</Radio>
          </RadioGroup>
        </DialogContent>
        <DialogActions>
            <Button type='button' onClick={this.handleAddScreenClick} accent>Create</Button>
            <Button type='button' onClick={this.closeSelectScreenTypeDialog}>Cancel</Button>
        </DialogActions>
      </Dialog>
    );

    const ellipsizeTitle = (screenId, rowData) => {
      const text = rowData.title;
      if (!text) return "";
      return (text.length <= 30) ? text : `${text.substring(0, 29)}...`;
    };

    return (
      <div>
        <Card shadow={0} style={styles.screens}>
          <Toolbar title="Screens">
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <IconButton name="add" onClick={this.openSelectScreenTypeDialog} />
            </div>
          </Toolbar>

          {(screens && screens.length > 0) ?
            <Table
              style={styles.table}
              rows={screens.map(scr => ({ id: scr.id, position: scr.position, ...scr.data }))}
              rowKeyColumn="position"
              onSort={this.swapScreenItems}
            >
                {/*<TableHeader name="$aVoid" cellFormatter={(aVoid, rowData, index) => `${index + 1}`} />*/}
                <TableHeader name="position">Pos</TableHeader>
                <TableHeader name="epicId">Epic</TableHeader>
                <TableHeader name="storyId">Story</TableHeader>
                <TableHeader name="refId">Ref.</TableHeader>
                <TableHeader name="title" style={{ width: '100%' }} cellFormatter={ellipsizeTitle}>Title</TableHeader>
                <TableHeader name="id" style={{ width: '48px' }} cellFormatter={renderItemActions} />
            </Table>
            :
            <CardText>
                <div style={styles.emptyMessageContainer}>
                    <div>The list of screens is empty</div>
                </div>
            </CardText>}
        </Card>
        {selectScreenTypeDialog}
      </div>
    );
  }
}

Display.propTypes = {
  screens: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  scriptId: PropTypes.string.isRequired,
  onEditScreenClick: PropTypes.func.isRequired
};

export default Display;
