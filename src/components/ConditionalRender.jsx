import TaskComponent from "./TaskComponent";
import {completedHandler, deleteTaskHandler} from "../Handlers/handlers";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import {UlContainer} from "../pages/Home/styles";
import {useState} from "react";


const ConditionalRender = ({
                                    active,
                                    activeArray,
                                    completedArray,
                                    setTasksArray,
                                    tasksArray,
                                    update,
                                    checkIcon,
                                    cross
                                  }) => {

  const handleOnDragEnd = (result, tasksArray, setTasksArray) => {
    const items = tasksArray;
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTasksArray(items);
  }

  return (
    <DragDropContext onDragEnd={(result) => handleOnDragEnd(result, tasksArray, setTasksArray)}>
      <Droppable droppableId='characters'>
        {(provided) => (
          <UlContainer className='characters' {...provided.droppableProps} ref={provided.innerRef}>
            {
              active.map((ele, index) => {
                if (ele.id === 2 && ele.active === true) {
                  return (
                    activeArray.map((element) => {
                      return (
                        <Draggable key={element.id} draggableId={element.id} index={index}>
                          {(provided) => (
                            <div ref={provided.innerRef}
                                 {...provided.draggableProps}
                                 {...provided.dragHandleProps}>
                              <TaskComponent
                                key={element.id}
                                element={element}
                                onClick={() => completedHandler(element.id, setTasksArray, tasksArray)}
                                src={checkIcon.default} cross={cross.default}
                                onClick1={() => deleteTaskHandler(element.id, tasksArray, setTasksArray, update)}/>
                            </div>
                          )}
                        </Draggable>
                      )
                    })
                  )
                } else if (ele.id === 3 && ele.active === true) {
                  return (
                    completedArray.map((element, index) => {
                      return (
                        <Draggable key={element.id} draggableId={element.id} index={index}>
                          {(provided) => (
                            <div ref={provided.innerRef}
                                 {...provided.draggableProps}
                                 {...provided.dragHandleProps}>
                              <TaskComponent
                                key={element.id} element={element}
                                onClick={() => completedHandler(element.id, setTasksArray, tasksArray)}
                                src={checkIcon.default} cross={cross.default}
                                onClick1={() => deleteTaskHandler(element.id, tasksArray, setTasksArray, update)}/>
                            </div>
                          )}
                        </Draggable>
                      )
                    })
                  )
                } else if (ele.id === 1 && ele.active === true) {
                  return (
                    tasksArray.map((element, index) => {
                      return (
                        <Draggable key={element.id} draggableId={element.id} index={index}>
                          {(provided) => (
                            <div ref={provided.innerRef}
                                 {...provided.draggableProps}
                                 {...provided.dragHandleProps}>
                              <TaskComponent
                                key={element.id} element={element}
                                onClick={() => completedHandler(element.id, setTasksArray, tasksArray)}
                                src={checkIcon.default} cross={cross.default}
                                onClick1={() => deleteTaskHandler(element.id, tasksArray, setTasksArray, update)}/>
                            </div>
                          )}
                        </Draggable>
                      )
                    })
                  )
                }
              })
            }
            {provided.placeholder}
          </UlContainer>
        )}
      </Droppable>
    </DragDropContext>
  )
}


export default ConditionalRender;