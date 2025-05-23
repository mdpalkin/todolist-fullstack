export enum TodolistStatusEnum {
	CREAETED = 'created',
	IN_PROGRESS = 'in_progress',
	DONE = 'done'
}

export interface ITodoList {
	id: string;
	title: string;
	description?: string;
	createdAt: Date;
	updatedAt: Date;
	status: TodolistStatusEnum;
}