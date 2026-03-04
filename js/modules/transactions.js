const Transactions = {
  getAll() {
    return Storage.get("gold_transactions") || [];
  },

  save(allTransactions) {
    Storage.set("gold_transactions", allTransactions);
  },

  add(transaction) {
    const all = this.getAll();
    all.push(transaction);
    this.save(all);
  },

  getBalance() {
    const all = this.getAll();

    const income = all
      .filter(t => t.type === "income")
      .reduce((acc, t) => acc + t.amount, 0);

    const expense = all
      .filter(t => t.type === "expense")
      .reduce((acc, t) => acc + t.amount, 0);

    return {
      income,
      expense,
      total: income - expense
    };
  }
};