const db = require("../config/db");
const { formatDatetimeIST } = require("../controllers/dateTimeFormat");

// fetch all products
exports.getProduct = (req, res) => {
    const sql = "SELECT * FROM tbl_product";
    db.query(sql, (err, results) => {
        if (err) throw err.message;
        return res.status(200).json(results);
    });
}

// create new products
exports.createProduct = (req, res) => {
    const today = formatDatetimeIST(new Date());
    const data = {
      name: req.body.name,
      price: req.body.price,
      thumbnail: req.body.thumbnail,
      created_at: today,
      updated_at: today,
    };

    const sql = "INSERT INTO tbl_product SET ?"
    db.query(sql, data, (err) => {
        if (err) throw err.message;
        return res.status(200).json({ message: "Product saved successfully" });
    });
}

// update product based on the id
exports.updateProduct = (req, res) => {
    const today = formatDatetimeIST(new Date());
    let data = req.body;
    data["updated_at"] = today;
    
    const sql = "UPDATE tbl_product SET ? WHERE id = ?";
    db.query(sql, [data, req.query.id], (err) => {
        if (err) throw err.message;
        return res.status(200).json({ message: "Product updated successfully" });
    });
};

// delete product based on the id
exports.deleteProduct = (req, res) => {    
    const sql = "DELETE FROM tbl_product WHERE id = ?";
    db.query(sql, req.query.id, (err) => {
      if (err) throw err.message;
      return res.status(200).json({ message: "Product deleted successfully" });
    });
};