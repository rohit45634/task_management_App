function StatsCard({

total,
completed,
pending,
high

}){

return(

<div
className="row g-3"
>

<div
className="col-md-3"
>

<div
className="card p-3"
>

<h6>

Total Tasks

</h6>

<h2>

{total}

</h2>

</div>

</div>

<div
className="col-md-3"
>

<div
className="card p-3"
>

<h6>

Completed

</h6>

<h2>

{completed}

</h2>

</div>

</div>

<div
className="col-md-3"
>

<div
className="card p-3"
>

<h6>

Pending

</h6>

<h2>

{pending}

</h2>

</div>

</div>

<div
className="col-md-3"
>

<div
className="card p-3"
>

<h6>

High Priority

</h6>

<h2>

{high}

</h2>

</div>

</div>

</div>

)

}

export default StatsCard