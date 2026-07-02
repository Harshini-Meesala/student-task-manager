import "../styles/Dashboard.css";

function SearchBar({
    search,
    setSearch,
    sortBy,
    setSortBy,
}) {
    return (
        <div className="search-sort-container">

            <div className="search-box">
                <input
                    type="text"
                    placeholder="🔍 Search tasks..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="search-bar"
                />
            </div>

            <div className="sort-box">
                <label>Sort By</label>

                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="sort-dropdown"
                >
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                    <option value="priority">Priority</option>
                    <option value="duedate">Due Date</option>
                </select>
            </div>

        </div>
    );
}

export default SearchBar;