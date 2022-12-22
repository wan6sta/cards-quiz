import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import cls from './TableSkeleton.module.css'

export const TableSkeleton = () => {
    return <Skeleton height={'41px'} count={10} width={'84.3vw'} className={cls.skeleton} />
}