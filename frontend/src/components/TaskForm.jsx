function TaskForm(){

return(

<div
className="card p-4 mt-4"
>

<h4>

Add New Task

</h4>

<div
className="row"
>

<div
className="col-md-3"
>

<input

className=
"form-control"

placeholder=
"Task title"

/>

</div>

<div
className="col-md-4"
>

<textarea

className=
"form-control"

placeholder=
"Description"

/>

</div>

<div
className="col-md-2"
>

<select
className=
"form-select"
>

<option>

Medium

</option>

<option>

High

</option>

<option>

Low

</option>

</select>

</div>

<div
className="col-md-3"
>

<button
className=
"btn btn-primary w-100"
>

Add Task

</button>

</div>

</div>

</div>

)

}

export default TaskForm