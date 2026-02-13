const ExpenseForm = () => {
  return (
    <div>
      <form action="">
        <div className="mb-3">
          <label htmlFor="description" className="form-lebel">
            description
          </label>
          <input id="Description" type="text" className="form-control" />
        </div>
        <div className="mb-3">
            <label htmlFor="amount" className="form-label">amount</label>
            <input id="amount" type="number" className="form-control" />
        </div>
        <div className="mb-3">
            <label htmlFor="" className="form-label"></label>
            <select className="form-select"></select>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
