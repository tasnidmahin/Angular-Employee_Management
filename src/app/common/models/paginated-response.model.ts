export interface PaginatedResponse<T> {
    content: T[];
    pageable: Pageable;
    last: boolean;
    totalElements: number;
    totalPages: number;
    size: number;
    number: number;
    sort: PaginatedSort;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}

export interface Pageable {
    pageNumber: number;
    pageSize: number;
    sort: PaginatedSort;
    offset: number;
    unpaged: boolean;
    paged: boolean
}

export interface PaginatedSort {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
}