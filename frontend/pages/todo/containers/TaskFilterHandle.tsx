import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ITodoState } from '../types'
import { setVisibilityFilter } from '../actions'
import TaskFilterHandle from '../components/TaskFilterHandle'

interface IOwnProps {
  filter: string
  children: React.ReactNode
}

const TaskFilterHandleCotntainer = (ownProps: IOwnProps): JSX.Element => {
  const stateProps = useSelector((state: ITodoState) => {
    return {
      active: ownProps.filter === state.visibilityFilter,
    }
  })

  const dispatch = useDispatch()
  const dispatchProps = {
    onClick: (): void => {
      dispatch(setVisibilityFilter({ filter: ownProps.filter }))
    },
  }

  const props = { ...stateProps, ...dispatchProps, ...ownProps }
  return <TaskFilterHandle {...props} />
}

export default TaskFilterHandleCotntainer