import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { displayBigNumber } from "@/lib/displayBigNumber";
import { cn } from "@/lib/utils";

type Props = {
    limit?: number;
    currentPage: number;
    totalPages: number;
    totalRows: number;
    disabled?: boolean;
    collectionName?: string;
    hideControls?: boolean;
    hideSummary?: boolean;
    hideNumbers?: boolean;
    nextLabel?: string;
    prevLabel?: string;
    hideNext?: boolean;
    hidePrev?: boolean;
    classes?: {
        pageNumber?: string;
    },
    onPaginate: (page: number) => void;
};

const LEFT_PAGE = "LEFT";
const RIGHT_PAGE = "RIGHT";

function range (from: number, to: number, step = 1) {
    let i = from;
    const range = [];
    while (i <= to) {
        range.push(i);
        i += step;
    }
    return range;
}

function getPageNumbers({
    totalPages = 0,
    currentPage = 1,
}: Props) {
    const pageNeighbours = 2;

    const totalNumbers = pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
        let pages = [];

        const leftBound = currentPage - pageNeighbours;
        const rightBound = currentPage + pageNeighbours;
        const beforeLastPage = totalPages - 1;

        const startPage = leftBound > 2 ? leftBound : 2;
        const endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage;

        pages = range(startPage, endPage);

        const pagesCount = pages.length;
        const singleSpillOffset = totalNumbers - pagesCount - 1;

        const leftSpill = startPage > 2;
        const rightSpill = endPage < beforeLastPage;

        const leftSpillPage = LEFT_PAGE;
        const rightSpillPage = RIGHT_PAGE;

        if (leftSpill && !rightSpill) {
            const extraPages = range(startPage - singleSpillOffset, startPage - 1);
            pages = [leftSpillPage, ...extraPages, ...pages];
        } else if (!leftSpill && rightSpill) {
            const extraPages = range(endPage + 1, endPage + singleSpillOffset);
            pages = [...pages, ...extraPages, rightSpillPage];
        } else if (leftSpill && rightSpill) {
            pages = [leftSpillPage, ...pages, rightSpillPage];
        }

        return [1, ...pages, totalPages];
    }

    return range(1, totalPages);
}

function getButtons(props: Props) {
    const {
        currentPage = 1,
        totalPages = 0,
        onPaginate,
    } = props;

    const arr = [
        {
            id: 'first',
            label: props.prevLabel !== undefined ? props.prevLabel : 'Previous',
            disabled: currentPage < 2,
            isPrev: true,
            isNext: false,
            isEllipsis: false,
            onClick: () => onPaginate(currentPage - 1),
        },
    ];

    getPageNumbers(props).forEach(page => {
        if ([LEFT_PAGE, RIGHT_PAGE].includes(page as string)) {
            arr.push({ 
                label: '...', 
                id: `${page}`,
                disabled: false,
                isPrev: false,
                isNext: false,
                isEllipsis: true,
                onClick: () => {}, 
            });
        } else {
            arr.push({
                id: `${page}`,
                label: `${page}`,
                disabled: currentPage === page,
                isPrev: false,
                isNext: false,
                isEllipsis: false,
                onClick: () => onPaginate(Number(page)),
            })
        }
    });
    arr.push({
        id: 'last',
        label: props.nextLabel !== undefined ? props.nextLabel : 'Next',
        disabled: totalPages === currentPage,
        isPrev: false,
        isNext: true,
        isEllipsis: false,
        onClick: () => onPaginate(currentPage + 1),
    });
    return arr;
}

function PaginationComponent(props: Props) {
    const { 
        currentPage, 
        totalPages, 
        disabled, 
        limit = 1, 
        totalRows, 
        collectionName = 'results',
        hideControls,
        hideSummary,
        hideNumbers,
        hideNext,
        hidePrev,
        classes,
    } = props;

    const buttons = getButtons(props);

    if (hideControls && hideSummary) return null;

    return (
        <div className="flex flex-col justify-center items-center gap-y-2">
            {!hideSummary && (
                <div className="text-xs opacity-50 min-w-10">
                    Showing {totalRows ? 
                        displayBigNumber(((currentPage - 1) * limit) + 1) : 0} 
                        &nbsp;-&nbsp; 
                        {displayBigNumber(Math.min(totalRows, currentPage * limit))} 
                        &nbsp;of&nbsp; 
                        {displayBigNumber(totalRows, { separator: ' ', })} {collectionName}
                </div>
            )}

            {!hideControls && (
                <Pagination>
                    <PaginationContent>
                        {buttons.map(btn => (
                            <PaginationItem 
                                key={btn.id}
                            >
                                {(() => {
                                    const isActive = `${currentPage}` === `${btn.label}`;
                                    let _disabled = btn.disabled || disabled;

                                    const disabledClassname = 'opacity-50';

                                    const onClick = () => !_disabled && btn.onClick();

                                    if (btn.isPrev) {
                                        if (hidePrev) return null;

                                        _disabled = _disabled || (currentPage === 1);

                                        return (
                                            <PaginationPrevious 
                                                href="#" 
                                                className={cn(
                                                    currentPage === 1 ? disabledClassname : '',
                                                )}
                                                onClick={e => {
                                                    e.stopPropagation();
                                                    e.preventDefault();
                                                    onClick();
                                                }}
                                            >
                                                <span>{btn.label}</span>
                                            </PaginationPrevious>
                                        );
                                    } else if (btn.isEllipsis) {
                                        if (hideNumbers) return null;

                                        return (
                                            <PaginationEllipsis 
                                                className={cn(
                                                    _disabled ? disabledClassname : '',
                                                    'hidden md:flex',
                                                    classes?.pageNumber,
                                                )}
                                            />
                                        );
                                    } else if (btn.isNext) {
                                        if (hideNext) return null;
                                        
                                        _disabled = _disabled || (currentPage === totalPages);

                                        return (
                                            <PaginationNext 
                                                href="#" 
                                                className={cn(
                                                    _disabled ? disabledClassname : '',
                                                )}
                                                onClick={e => {
                                                    e.stopPropagation();
                                                    e.preventDefault();
                                                    onClick();
                                                }}
                                            >
                                                <span>{btn.label}</span>
                                            </PaginationNext>
                                        );
                                    } else {
                                        if (hideNumbers) return null;

                                        return (
                                            <PaginationLink 
                                                href="#"
                                                className={cn(
                                                    _disabled ? disabledClassname : '',
                                                    'hidden md:flex',
                                                    classes?.pageNumber
                                                )}
                                                isActive={isActive}
                                                onClick={e => {
                                                    e.stopPropagation();
                                                    e.preventDefault();
                                                    onClick();
                                                }}
                                            >{btn.label}</PaginationLink>
                                        );
                                    }
                                })()}
                            </PaginationItem>
                        ))}
                    </PaginationContent>
                </Pagination>
            )}
        </div>
    );
}

export { PaginationComponent as Pagination, };
