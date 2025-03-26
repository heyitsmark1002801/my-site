import React from 'react';
import IconLink from "./IconLink";
import { Box, Divider } from "@mui/material";

function PortfolioBlock(props) {
   const { image, live, source, title, description, abstract, video } = props;

   return (
      <Box
         display="flex"
         flexDirection="column"
         alignItems="center"
         my={6}
         px={2}
         width="100%"
         maxWidth="800px"
         mx="auto"
         borderRadius="12px"
         boxShadow="0 4px 20px rgba(0,0,0,0.1)"
      >
         {/* Project Title */}
         <h2 style={{ fontSize: '2rem', marginBottom: '1rem', textAlign: 'center' }}>{title}</h2>

         {/* Video */}
         {video && (
            <Box
               mt={2}
               width="100%"
               border="2px solid #ccc"
               borderRadius="12px"
               overflow="hidden"
            >
               {video.endsWith(".mp4") ? (
                  <video
                     src={video}
                     controls
                     style={{ width: '100%', height: 'auto' }}
                  />
               ) : (
                  <iframe
                     src={video}
                     title="Project Video"
                     frameBorder="0"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowFullScreen
                     style={{ width: '100%', height: '400px', border: 'none' }}
                  />
               )}
            </Box>
         )}

         {/* Description Box */}
{/* Description Box */}
{description && (
   <Box
      mt={3}
      px={3}
      py={2}
      width="100%"
      sx={{
         backgroundColor: '#eeeeee',
         borderRadius: '10px',
         fontSize: '1rem',
         textAlign: 'left',
         color: '#000000', // force full black
      }}
   >
      {Array.isArray(description) ? (
         <ul style={{ paddingLeft: '1.2rem', margin: 0, color: '#000000' }}>
            {description.map((point, index) => (
               <li key={index} style={{ marginBottom: '0.5rem', color: '#000000' }}>
                  {point}
               </li>
            ))}
         </ul>
      ) : (
         <p style={{ color: '#000000' }}>{description}</p>
      )}
   </Box>
)}


         {/* Links */}
         <Box mt={3} display="flex" flexWrap="wrap" justifyContent="center" gap="1rem">
            {live && <IconLink link={live} title="Live Demo" icon="fa fa-safari" />}
            {source && <IconLink link={source} title="Source Code" icon="fa fa-code" />}
            {abstract && (
               <a
                  href={abstract}
                  download
                  style={{
                     textDecoration: 'none',
                     padding: '0.5rem 1rem',
                     border: '1px solid #888',
                     borderRadius: '20px',
                     color: '#000',
                     display: 'flex',
                     alignItems: 'center'
                  }}
               >
                  <i className="fa fa-file-pdf-o" style={{ marginRight: '0.5rem' }} />
                  Download Abstract
               </a>
            )}
         </Box>

         {/* Divider Below Each Project */}
         <Divider sx={{ mt: 6, width: '100%' }} />
      </Box>
   );
}

export default PortfolioBlock;
