import React, { FC, useEffect, useState } from 'react';
import { delay } from '../../../helpers/helpers';
import "./CompletedTask.scss";

interface CompletedTaskProps {
  taskMessage: string
  setCompletedTask: (elem: boolean) => void
}

const CompletedTask: FC<CompletedTaskProps> = ({taskMessage, setCompletedTask}) => {
  const [slowlyInActive, setSlowlyInActive] = useState(false);

  const closeCompletedTask = async () => {
    setSlowlyInActive(true);
    await delay(490);
    setCompletedTask(false);
  }

  const handleClose = (e: React.SyntheticEvent) => {
    let target = e.target as HTMLInputElement;
    if(target.className === 'task') {
      closeCompletedTask()
    }
  }

  const handleEscape = (e:any) => {
    if(e.key === 'Escape' && taskMessage) {
      closeCompletedTask()
    }
  }

  useEffect(() => {
    window.addEventListener('keyup', handleEscape);

    return () => {
      window.removeEventListener('keyup', handleEscape);
    }
  })

  
  return (
    <div className={slowlyInActive ? "task task_inactive" : "task"} onClick={handleClose}>
      <button className="task__close fas fa-times" onClick={closeCompletedTask}></button>
      <div className={slowlyInActive ? "task__content task__content_inactive" : "task__content"}>
        <div className="task__text">
          <i className="fas fa-check-circle task__icon"></i>
          {taskMessage}
        </div>
      </div>
    </div>
  )
}

export default CompletedTask;