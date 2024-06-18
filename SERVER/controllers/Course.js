const Course = require("../models/Course");
const Category = require("../models/Category");
const User = require("../models/User");
const uploadImageToCloudinary = require("../utils/imageUploader");

//create course
exports.createCourse = async(req, res) => {
    try {
        // fetch data
        const {courseName, courseDescription, aboutCourse, price, tag} = req.body;

        const thumbnail = req.files.thumbnailImage;

        //validation
        if(!courseName || !courseDescription || !aboutCourse || price || tag ){
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        //check for instructor
        const userId = req.user.id;
        const instructorDetails = await User.findById(userId);
        console.log("Instructor details -> ", instructorDetails);

        if(!instructorDetails){
            return res.status(404).json({
                success: false,
                message: "Instructor detail not found",
            });
        }

        //check given tag is valid or not
        const categoryDetails = await Category.findById({tag});

        if(!categoryDetails){
            return res.status(404).json({
                success: false,
                message: "Tag details not found",
            })
        }

        //upload image cloudinary
        const thumbnailImage = await uploadImageToCloudinary(thumbnail, process.env.FOLDERNAME);

        //create for new course
        const newCourse = await Course.create({
            courseName,
            courseDescription,
            instructor: instructorDetails._id,
            price,
            category: categoryDetails._id,
            thumbnail: thumbnailImage.secure_url,
        });

        //add the new course to the user schema of instructor
        await User.findByIdAndUpdate(
            {_id: instructorDetails._id},
            {
                $push:{
                    courses: newCourse._id,
                }
            },
            {new: true}
        )

        //update the tag shcema -> karna hai


        return res.status(200).json({
            success: true,
            message: "Course Create Successfully",
            data: newCourse,
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Failed to create a course",
        })
    }
}

//get all course
exports.getAllCourses = async(req, res)=>{
    try {

        const allCourse = await Course.find({}, {
            courseName: true,
            price: true,
            thumbnail: true,
            instructor: true,
            rateAndReview: true,
            studentEnrolled:true,
        }).populate("instructor").exec();

        console.log(allCourse);

        return res.status.json({
            success: true,
            message: "Data for all courses matched successfully",
            data: allCourse,
        })
        
    } catch (error) {
        console.log(error);
        return res.status.json({
            success: false,
            message: "Cannot fetch data",
            error: error.message,
        })
    }
}