const Category = require("../models/Category");

//create tag 
exports.createCategory = async(req, res)=>{
    try {
        const {name, description} = req.body;

        if([name, description].some((field) => field?.trim() === "")){
            return res.status(403).json({
                success: false,
                message: "Please fill all fields",
            })
        }

        const categoryData = await Category.create({name: name, description: description});

        console.log(categoryData);

        return res.status(200).json({
            success: true,
            message: "Tag created successfully",
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

//get all tag
exports.showAllCategory = async(req, res) => {
    try {
        const allCategory = await Category.find({}, {name: true, description: true});
        console.log(allCategory);

        return res.status(200).json({
            success: true,
            message: "All tags are visible"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
};

