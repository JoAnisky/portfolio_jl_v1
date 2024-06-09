import React, { FC, useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

// Définir une interface pour les props
interface LightBoxBtnProps {
  workImage: string;
  open: boolean;
  onClose: () => void;
}

const LightBoxBtn: FC<LightBoxBtnProps> = ({ workImage, open, onClose }) => {
  const [imagesCount, setImagesCount] = useState<number>(0);
  const [imagePaths, setImagePaths] = useState<{ src: string }[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`./php/workimages.php?workImage=${workImage}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },

        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("workImage :" , workImage);
        console.log('File count:', data.fileCount); // Affiche le nombre de fichiers
        setImagesCount(data.fileCount)
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, [workImage]);

  useEffect(() => {
    const generateImagesUrl = () => {
      const paths = [];
      for (let i = 0; i <= imagesCount -1; i++) {
        paths.push({ src: `./media/work//${workImage}/screens/${workImage}-${i}.webp` });
      }
      setImagePaths(paths);
    };

    generateImagesUrl();
  }, [imagesCount, workImage]);

  return (
    <>
      <Lightbox
        plugins={[Fullscreen, Thumbnails]}
        open={open}
        close={onClose}
        slides={imagePaths}
      />
    </>
  );
};

export default LightBoxBtn;
