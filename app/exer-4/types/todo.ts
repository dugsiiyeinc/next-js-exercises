
export type TodoType={
    _id:string;
    title:string;
    priority:string;
    completed:boolean;
    createdAt:string;
    updatedAt?:string
}

export type createTodoType={
    title:string;
    priority:string;
    completed:boolean;
    createdAt:string;
    updatedAt?:string
}

export type updateTodoType={
    title?:string;
    priority?:string;
    completed?:boolean;
    updatedAt?:string
}