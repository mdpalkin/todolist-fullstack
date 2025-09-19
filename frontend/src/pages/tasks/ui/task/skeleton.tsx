import { Card, CardBody, Skeleton } from '@heroui/react'

export const TaskSkeleton = () => {
	 return (
		<>
	 <Card>
		<CardBody>
				<CardBody className='flex align-start flex-row gap-5 px-0 py-4'>
				<Skeleton className="flex align-middle rounded-full w-6 h-6" />
					<div className='flex flex-col w-md gap-2'>
						<Skeleton className="h-3 w-1/5 rounded-lg" />
						<Skeleton className="h-3 w-3/5 rounded-lg" />
					</div>
					</CardBody>
			</CardBody>
    </Card>
			 <Card>
		<CardBody>
				<CardBody className='flex align-start flex-row gap-5 px-0 py-4'>
				<Skeleton className="flex align-middle rounded-full w-6 h-6" />
					<div className='flex flex-col w-md gap-2'>
						<Skeleton className="h-3 w-1/5 rounded-lg" />
						<Skeleton className="h-3 w-3/5 rounded-lg" />
					</div>
					</CardBody>
			</CardBody>
    </Card>
			 <Card>
		<CardBody>
				<CardBody className='flex align-start flex-row gap-5 px-0 py-4'>
				<Skeleton className="flex align-middle rounded-full w-6 h-6" />
					<div className='flex flex-col w-md gap-2'>
						<Skeleton className="h-3 w-1/5 rounded-lg" />
						<Skeleton className="h-3 w-3/5 rounded-lg" />
					</div>
					</CardBody>
			</CardBody>
    </Card>
	 </>
	 )
}