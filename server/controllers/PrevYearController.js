const ThirdSemQuest = require("../models/prev_ouestion/ThirdSem");
const FourthSemQuest = require("../models/prev_ouestion/FourthSem");
const FifthSemQuest = require("../models/prev_ouestion/FifthSem");
const SixthSemQuest = require("../models/prev_ouestion/SixthSem");
const SeventhSemQuest = require("../models/prev_ouestion/SeventhSem");
const EighthSemQuest = require("../models/prev_ouestion/EightSem");

const cloudinary = require("cloudinary").v2
const isFileTypeSupported = (type, supportedTypes) =>{
    return supportedTypes.includes(type);
}
const uploadFileToCloudinary = async(file,folder,quality)=>{
    const options = {folder};

    if(quality){
        options.quality = quality;
    }

    options.resource_type = "auto";

    const fileUploaded =  await cloudinary.uploader.upload(file.tempFilePath,options);
    if(!fileUploaded){
        throw new Error("Error uploading file to cloudinary");
    }
    return fileUploaded;
}

exports.createThirdSemQuestController = async(req,res) =>{
    try{
        console.log("hello");
        // get data from req body
        const {name,email,semester,subjectName,subDes} = req.body;

        // get file form req body
        const file = req.files.notes;
        console.log(file);
        // validation
        if(!name || !email || !semester || !subjectName || !file){
            return res.status(400).json({message:"Please fill all the fields"})

        }

        // supported files
        const supportedTypes = ["pdf"];
        const fileType = file.name.split(".")[1].toLowerCase();
        console.log(fileType);
        if(!isFileTypeSupported(fileType,supportedTypes)){
            return res.status(401).json({
                success:false,
                message:"File type is not supported",
            });
        };

        // upload to cloudinary
        console.log("Image upload to cloudinary");
        const uploadResponse = await uploadFileToCloudinary(file,"NiuSemNotes",150);
        console.log(uploadResponse);

        // create entry in database
        const response = await ThirdSemQuest.create({
            name,
            email,
            semester,
            subjectName,
            subDes,
            notes:uploadResponse.secure_url,
        });
        // response 
        return res.status(200).json({
            success:true,
            data:response,
            message:"Third Question bank uploaded successfully",
        });

    }
    catch(error){
        console.log(error);
        res.status(402).json({
            success:false,
            message:"Error while creating Third Quest bank",
        })
    
    }
}
exports.getThirdSemQuestController = async(req, res) =>{
    try{
        const response = await ThirdSemQuest.find({});
      //  console.log("third",response);
        if(!response){
            return res.status(200).json({
                success:true,
                data:response,
                message:"No Question bank Available",
            })
        }
        res.status(200).json({
            success:true,
            data:response,
            message:"Third Sem Question bank fetch Successfully",
        })
        
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            message:"Error while fetching third sem question bank",
        })
    }
}

exports.createFourthSemQuestController = async(req,res) =>{
    try{
        console.log("hello");
        // get data from req body
        const {name,email,semester,subjectName,subDes} = req.body;

        // get file form req body
        const file = req.files.notes;
        console.log(file);
        // validation
        if(!name || !email || !semester || !subjectName || !file){
            return res.status(400).json({message:"Please fill all the fields"})

        }

        // supported files
        const supportedTypes = ["pdf"];
        const fileType = file.name.split(".")[1].toLowerCase();
        console.log(fileType);
        if(!isFileTypeSupported(fileType,supportedTypes)){
            return res.status(401).json({
                success:false,
                message:"File type is not supported",
            });
        };

        // upload to cloudinary
        console.log("Image upload to cloudinary");
        const uploadResponse = await uploadFileToCloudinary(file,"NiuSemNotes",150);
        console.log(uploadResponse);

        // create entry in database
        const response = await FourthSemQuest.create({
            name,
            email,
            semester,
            subjectName,
            subDes,
            notes:uploadResponse.secure_url,
        });

        // response 
        return res.status(200).json({
            success:true,
            data:response,
            message:"Fourth Question bank uploaded successfully",
        });

    }
    catch(error){
        console.log(error);
        res.status(402).json({
            success:false,
            message:"Error while creating Fourth Quest bank",
        })
    
    }
}
exports.getFourthSemQuestController = async(req, res) =>{
    try{
        const response = await FourthSemQuest.find({});
      //  console.log("third",response);
        if(!response){
            return res.status(200).json({
                success:true,
                data:response,
                message:"No Question bank Available",
            })
        }
        res.status(200).json({
            success:true,
            data:response,
            message:"Fourth Sem Question bank fetch Successfully",
        })
        
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            message:"Error while fetching Fourth sem question bank",
        })
    }
}

exports.createFifthSemQuestController = async(req,res) =>{
    try{
        console.log("hello");
        // get data from req body
        const {name,email,semester,subjectName,subDes} = req.body;

        // get file form req body
        const file = req.files.notes;
        console.log(file);
        // validation
        if(!name || !email || !semester || !subjectName || !file){
            return res.status(400).json({message:"Please fill all the fields"})

        }

        // supported files
        const supportedTypes = ["pdf"];
        const fileType = file.name.split(".")[1].toLowerCase();
        console.log(fileType);
        if(!isFileTypeSupported(fileType,supportedTypes)){
            return res.status(401).json({
                success:false,
                message:"File type is not supported",
            });
        };

        // upload to cloudinary
        console.log("Image upload to cloudinary");
        const uploadResponse = await uploadFileToCloudinary(file,"NiuSemNotes",150);
        console.log(uploadResponse);

        // create entry in database
        const response = await FifthSemQuest.create({
            name,
            email,
            semester,
            subjectName,
            subDes,
            notes:uploadResponse.secure_url,
        });

        // response 
        return res.status(200).json({
            success:true,
            data:response,
            message:"Fifth Question bank uploaded successfully",
        });

    }
    catch(error){
        console.log(error);
        res.status(402).json({
            success:false,
            message:"Error while creating Fifth Quest bank",
        })
    
    }
}
exports.getFifthSemQuestController = async(req, res) =>{
    try{
        const response = await FifthSemQuest.find({});
      //  console.log("third",response);
        if(!response){
            return res.status(200).json({
                success:true,
                data:response,
                message:"No Question bank Available",
            })
        }
        res.status(200).json({
            success:true,
            data:response,
            message:"Fifth Sem Question bank fetch Successfully",
        })
        
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            message:"Error while fetching Fifth sem question bank",
        })
    }
}

exports.createSixthSemQuestController = async(req,res) =>{
    try{
        console.log("hello");
        // get data from req body
        const {name,email,semester,subjectName,subDes} = req.body;

        // get file form req body
        const file = req.files.notes;
        console.log(file);
        // validation
        if(!name || !email || !semester || !subjectName || !file){
            return res.status(400).json({message:"Please fill all the fields"})

        }

        // supported files
        const supportedTypes = ["pdf"];
        const fileType = file.name.split(".")[1].toLowerCase();
        console.log(fileType);
        if(!isFileTypeSupported(fileType,supportedTypes)){
            return res.status(401).json({
                success:false,
                message:"File type is not supported",
            });
        };

        // upload to cloudinary
        console.log("Image upload to cloudinary");
        const uploadResponse = await uploadFileToCloudinary(file,"NiuSemNotes",150);
        console.log(uploadResponse);

        // create entry in database
        const response = await SixthSemQuest.create({
            name,
            email,
            semester,
            subjectName,
            subDes,
            notes:uploadResponse.secure_url,
        });

        // response 
        return res.status(200).json({
            success:true,
            data:response,
            message:"Sixth Question bank uploaded successfully",
        });

    }
    catch(error){
        console.log(error);
        res.status(402).json({
            success:false,
            message:"Error while creating Sixth Quest bank",
        })
    
    }
}
exports.getSixthSemQuestController = async(req, res) =>{
    try{
        const response = await SixthSemQuest.find({});
      //  console.log("third",response);
        if(!response){
            return res.status(200).json({
                success:true,
                data:response,
                message:"No Question bank Available",
            })
        }
        res.status(200).json({
            success:true,
            data:response,
            message:"Six Sem Question bank fetch Successfully",
        })
        
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            message:"Error while fetching Six sem question bank",
        })
    }
}

exports.createSeventhSemQuestController = async(req,res) =>{
    try{
        console.log("hello");
        // get data from req body
        const {name,email,semester,subjectName,subDes} = req.body;

        // get file form req body
        const file = req.files.notes;
        console.log(file);
        // validation
        if(!name || !email || !semester || !subjectName || !file){
            return res.status(400).json({message:"Please fill all the fields"})

        }

        // supported files
        const supportedTypes = ["pdf"];
        const fileType = file.name.split(".")[1].toLowerCase();
        console.log(fileType);
        if(!isFileTypeSupported(fileType,supportedTypes)){
            return res.status(401).json({
                success:false,
                message:"File type is not supported",
            });
        };

        // upload to cloudinary
        console.log("Image upload to cloudinary");
        const uploadResponse = await uploadFileToCloudinary(file,"NiuSemNotes",150);
        console.log(uploadResponse);

        // create entry in database
        const response = await SeventhSemQuest.create({
            name,
            email,
            semester,
            subjectName,
            subDes,
            notes:uploadResponse.secure_url,
        });

        // response 
        return res.status(200).json({
            success:true,
            data:response,
            message:"Seventh Question bank uploaded successfully",
        });

    }
    catch(error){
        console.log(error);
        res.status(402).json({
            success:false,
            message:"Error while creating Seventh Quest bank",
        })
    
    }
}
exports.getSeventhSemQuestController = async(req, res) =>{
    try{
        const response = await SeventhSemQuest.find({});
      //  console.log("third",response);
        if(!response){
            return res.status(200).json({
                success:true,
                data:response,
                message:"No Question bank Available",
            })
        }
        res.status(200).json({
            success:true,
            data:response,
            message:"Seventh Sem Question bank fetch Successfully",
        })
        
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            message:"Error while fetching Seventh sem question bank",
        })
    }
}


exports.createEighthSemQuestController = async(req,res) =>{
    try{
        console.log("hello");
        // get data from req body
        const {name,email,semester,subjectName,subDes} = req.body;

        // get file form req body
        const file = req.files.notes;
        console.log(file);
        // validation
        if(!name || !email || !semester || !subjectName || !file){
            return res.status(400).json({message:"Please fill all the fields"})

        }

        // supported files
        const supportedTypes = ["pdf"];
        const fileType = file.name.split(".")[1].toLowerCase();
        console.log(fileType);
        if(!isFileTypeSupported(fileType,supportedTypes)){
            return res.status(401).json({
                success:false,
                message:"File type is not supported",
            });
        };

        // upload to cloudinary
        console.log("Image upload to cloudinary");
        const uploadResponse = await uploadFileToCloudinary(file,"NiuSemNotes",150);
        console.log(uploadResponse);

        // create entry in database
        const response = await EighthSemQuest.create({
            name,
            email,
            semester,
            subjectName,
            subDes,
            notes:uploadResponse.secure_url,
        });

        // response 
        return res.status(200).json({
            success:true,
            data:response,
            message:"Eight Question bank uploaded successfully",
        });

    }
    catch(error){
        console.log(error);
        res.status(402).json({
            success:false,
            message:"Error while creating Eigth Quest bank",
        })
    
    }
}
exports.getEighthSemQuestController = async(req, res) =>{
    try{
        const response = await EighthSemQuest.find({});
      //  console.log("third",response);
        if(!response){
            return res.status(200).json({
                success:true,
                data:response,
                message:"No Question bank Available",
            })
        }
        res.status(200).json({
            success:true,
            data:response,
            message:"Eigth Sem Question bank fetch Successfully",
        })
        
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            message:"Error while fetching Eigth sem question bank",
        })
    }
}
