    import { useState } from "react";
    import axios from "axios";

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
            
            <li>
            <div onClick={() => setSelected(!selected)} >
                {
                    selected ?(
                        //if selectedcis true
                        <p>
                            {item.description}
                        </p>
                    ): (
                        // if selected is false, show this
                        <img src ={item.path} alt="images"></img>
                    )
                }



            </div>

                <button onClick={handleLikes}>Love</button>
            </li>
        
            
            
            
            </>
        )
        
    }


    export default GalleryItem;