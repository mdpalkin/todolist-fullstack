export enum TaskStatusEnum {
	CREATED = 'created',
	IN_PROGRESS = 'in_progress',
	COMPLETED = 'completed',
}

export interface ITask {
	id: string;
	title: string;
	description?: string;
	createdAt: Date;
	updatedAt: Date;
	status: TaskStatusEnum;
	todolistId?: string;
}

export interface GetTaskParams {
	title?: string;
	description?: string;
	status?: TaskStatusEnum;
}
