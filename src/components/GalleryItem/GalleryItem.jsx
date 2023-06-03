    import { useState } from "react";
    import axios from "axios";
    import './GalleryItem.css'
    

    function GalleryItem({item, getGallery}) {

        const [selected, setSelected] = useState(false);



        const handleLikes = (id, data) => {
            axios.put(`/gallery/like/${id}`)
            .then(response => {
            console.log('response from gallery', response.data);
            getGallery();
            })
            .catch(err => {
            alert('error getting gallery');
            console.log(err);
            })
        }


        return (
            <>
            
            
            <div className="div" onClick={() => setSelected(!selected)} >
                {
                    selected ?(
                        //if selectedcis true
                        <p>
                            {item.description}
                        </p>
                    ): (
                        // if selected is false, show this
                        <img className="images" src ={item.path} alt="images"></img>
                    )
                }



            </div>
            <div className="like">

                <button onClick={() =>handleLikes(item.id)}>Love</button>
                <p>{item.likes} Loved This Pic</p>
                </div>
            
        
            
            
            
            </>
        )
        
    }


    export default GalleryItem;