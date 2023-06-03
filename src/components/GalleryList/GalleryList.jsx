import GalleryItem from "../GalleryItem/GalleryItem"

function GalleryList({galleryList, getGallery}) {

    return (
        <>
        
        <p>Gallery List</p>
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