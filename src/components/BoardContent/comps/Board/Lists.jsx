import { Draggable, Droppable } from "react-beautiful-dnd";
import AddNewItem from "../add-input/AddNewItem";
import Items from "./Items";

function Lists({ list, index, board , color}) {
  return (
    <Draggable draggableId={list.id} index={index}>
      {(prov,snap) => (
        <div
          ref={prov.innerRef}
          {...prov.draggableProps}
          {...prov.dragHandleProps}
          className="list"
        >
          <div className="list-title">
            <h3>{list.title}</h3>
          </div>
          <Droppable droppableId={list.id}>
            {(prov,snap) => (
              <div
                ref={prov.innerRef}
                {...prov.droppableProps}
                className="items"
                 style={{
                   transtions: 'all .3s',
                   backgroundColor:color,
                  background: snap.isDraggingOver  && 'linear-gradient(to right, #00ff2a, #66ff00)',
                }}
              >
                {list.items &&
                  list.items
                    .map((item, indx) => (
                      <Items
                        board={board}
                        item={item}
                        listIndex={index}
                        key={item.id}
                        index={indx}
                      />
                    ))}
                {prov.placeholder}
              </div>
            )}
          </Droppable>
          <div className="add-new-items">
            <AddNewItem index={index} list={list} board={board} />
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default Lists;
