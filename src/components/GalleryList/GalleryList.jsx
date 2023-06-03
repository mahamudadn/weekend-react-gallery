import GalleryItem from "../GalleryItem/GalleryItem"

function GalleryList({galleryList, getGallery}) {

    return (
        <>
        
 
        {galleryList.map((item) => (
            <GalleryItem
            key={item.id}
            item={item}
            getGallery={getGallery}
            
            
            />

        ))}
        
        </>
    )
    
}

export default GalleryList