import JavaScript from "./JavaScript";
import PathParameters from "./routing/PathParameters";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import Add from "./Add";
import TodoList from "./todo/TodoList";

function Assignment3() {
 return (
   <div>
     <h1>Assignment 3</h1>
     <TodoList/>
     <Add a={3} b={4} />
     <ConditionalOutput/>
     <Styles/>
     <Classes/>
     <PathParameters/>
     <JavaScript/>
   </div>
 )
}
export default Assignment3;


