import React, { useCallback } from 'react'
import { MarkAsNothingToDoButton } from './MarkAsNothingToDoButton'
import { FinishButton } from './FinishButton'
import { GraphicalIcon } from '../../common'
import { SessionProps } from '../Session'
import { MentorDiscussion as Discussion } from '../../types'

export const DiscussionActions = ({
  links,
  session,
  setSession,
  isFinished,
}: Discussion & {
  session: SessionProps
  setSession: (session: SessionProps) => void
}): JSX.Element => {
  const handleSuccess = useCallback(
    (discussion) => {
      const { student, ...discussionProps } = discussion

      setSession({
        ...session,
        discussion: discussionProps,
        student: student,
      })
    },
    [setSession, session]
  )

  return (
    <>
      {links.markAsNothingToDo ? (
        <MarkAsNothingToDoButton endpoint={links.markAsNothingToDo} />
      ) : null}

      {isFinished ? (
        <div className="finished">
          <GraphicalIcon icon="completed-check-circle" />
          Ended
        </div>
      ) : links.finish ? (
        <FinishButton endpoint={links.finish} onSuccess={handleSuccess} />
      ) : null}
    </>
  )
}
