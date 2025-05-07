import Product from '../models/product.model.js'



export async function addProduct(req,res){
    try {
       const {imagelink,hoverimagelink,name,specifications,price,keyUses,linkvf, linkvf2,link1,
        link2,link3,link4,link5,link6,btnlink,videotitle,video,bnn1title,bnn1,bnn2title,bnn2,bnn3title,bnn3,category,stock}=req.body 
        if(!(imagelink&&hoverimagelink&&name&&specifications&&price&&keyUses&&linkvf&& linkvf2&&link1&&
            link2&&link3&&link4&&link5&&link6&&category&&stock))
            return res.status(400).send("Missing fields")

            const item=await Product.create({imagelink,hoverimagelink,name,specifications,price,keyUses,linkvf, linkvf2,link1,
                link2,link3,link4,link5,link6,btnlink,videotitle,video,bnn1title,bnn1,bnn2title,bnn2,bnn3title,bnn3,category,stock})
                if(item){
                    return res.status (200).send("Product added successfully")
                }else{
                    return res.status(401).send("Error in adding product")
                }

    } catch (error) {
        return res.status(500).send("Internal error")
    }
}


export async function getProduct(req,res){
    try {
        const data=await Product.find({})
        if(data){
            return res.status(200).send(data)
        }else{
            return res.status(404).send("no data available")
        }
    } catch (error) {
       return res.status(500).send("internal error") 
    }
}


export async function getProductById(req,res){
    try {
        const {id}=req.params
   const data=await Product.findOne({_id:id})
   if(data){
    return res.status(200).send(data)
   }else{
    return res.status(404).send("no specified data available")
   }
    } catch (error) {
       return res.status(500).send("internal error") 
    }
}


export async function updateProduct(req, res) {
  try {
    const { id } = req.params;
    const item = req.body;

    const data = await Product.findByIdAndUpdate(id, item, { new: true });

    if (data) {
      return res.status(200).json(data);
    } else {
      return res.status(404).send("No specified data available");
    }
  } catch (error) {
    console.error("Error updating product:", error);
    return res.status(500).send("Internal server error");
  }
}

export async function deleteProduct(req,res){
    try {
        const {id}=req.params
        const data=await Product.deleteOne({_id:id})
        if(data){
            return res.status(200).send("Deleted successfully")
        }else{
            return res.status(400).send("Error in Deletion") 
        }
    } catch (error) {
        return res.status(500).send("Internal server error") 
    }
}