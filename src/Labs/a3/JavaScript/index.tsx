import VariablesAndConstants from "./variables/VariablesAndConstants";
import VariableTypes from "./variables/variableTypes";
import BooleanVariables from "./variables/BooleanVariables";
import IfElse from "./conditionals/IfElse";
import TernaryOperator from "./conditionals/TernaryOperator";
import WorkingWithFunctions from "./functions/WorkingWithFunctions";
import TemplateLiteral from "./string/TemplateLiteral";
import WorkingwithArrays from "./arrays/WorkingwithArrays";
import House from "./json/House";
import Spreading from "./json/Spreading";
import Destructing from "./json/Destructing";
import FunctionDestructing from "./functions/FunctionDestructing";

function JavaScript() {
    console.log('Hello World!')
    return(
       <div>
          <h1>JavaScript</h1>
          <VariablesAndConstants/>
          <VariableTypes/>
          <BooleanVariables/>
          <IfElse/>
          <TernaryOperator/>
          <WorkingWithFunctions/>
          <WorkingwithArrays />
          <TemplateLiteral/>
          <House />
          <Spreading/>
          <Destructing/>
          <FunctionDestructing/>
       </div>
    );
 }
 export default JavaScript
 
 