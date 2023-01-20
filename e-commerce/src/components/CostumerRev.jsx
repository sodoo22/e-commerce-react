export default function CostumerRev() {
    return (
        <div className="p-5">
            <div className="d-flex justify-content-center gap-4 pt-4">
                <button className="btn btn-outline-secondary rounded-4 px-5 py-3">Description</button>
                <button className="btn btn-secondary rounded-4 px-5 py-3 text-white">Reviews</button>
            </div>

            <div className="cosRevDiv">
                <h3>Costumer reviews</h3>
                <p>No reviews yet</p>
                <a href=""> Write a review</a>
            </div>
        </div>
    )
}