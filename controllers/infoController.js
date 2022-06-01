const Info = require('../models/Info')

const getAllInfos = async (req, res, next) =>{
    let infos;
    try{
        infos = await Info.find();
    }catch(err){
        console.log(err);
    }

    if(!infos){
        return res.status(404).json({ message: "No Products found" })
    }

    return res.status(200).json({ infos })
}

const addInfos = async (req, res, next)=>{
    const {name, email, phone, address, region, township} = req.body
    let info;
    try{
        info = new Info({
            name,
            email,
            phone,
            address,
            region,
            township
        })
        await info.save();
    }catch(err){
        console.log(err);
    }

    if(!info){
        return res.status(500).json({message: "Unable to add"})
    }
    return res.status(201).json({info})
}

const getById = async (req, res, next)=>{
    const id =req.params.id;
    let info;
    try{
        info = await Info.findById(id)
    }catch(err){
        console.log(err);
    }

    if(!info){
        return res.status(404).json({ message: "No Book found" })
    }

    return res.status(200).json({ info })
}

const updateInfo = async (req, res, next)=>{
    const id = req.params.id;
    const {name, email, phone, address, region, township} = req.body;
    let info;
    try{
        info = await Info.findByIdAndUpdate(id,{
            name,
            email,
            phone,
            address,
            region,
            township
        })
        info = await info.save()
    }catch(err){
        console.log(err);
    }

    if(!info){
        return res.status(404).json({message: "Unable to update by this id"})
    }
    return res.status(200).json({info})
}

const deleteInfo = async (req, res, next)=>{
    const id = req.params.id;
    let info;
    try{
        info = await Info.findByIdAndRemove(id);
    }catch(err){
        console.log(err);
    }

    if(!info){
        return res.status(404).json({message: "Unable to delete by this id"})
    }
    return res.status(200).json({message: "successfully deleted"})
}

exports.getAllInfos = getAllInfos
exports.addInfos = addInfos
exports.getById = getById
exports.updateInfo = updateInfo
exports.deleteInfo = deleteInfo;