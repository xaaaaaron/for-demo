'use client'

import React, {useState, useEffect} from 'react';
import { FixedSizeGrid as Grid } from 'react-window';
import GridItem from './GridItem';
import AutoSizer from "react-virtualized-auto-sizer";


const GridContainer = ({ items }:any) => {

    const [columnCount, setColumnCount] = useState(4);
    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            const newColumnCount = screenWidth >= 1700 ? 4 : screenWidth < 1500 && screenWidth > 800 ? 2: screenWidth < 1500 && screenWidth > 800 ? 3:
            screenWidth > 1500 && screenWidth < 1700? 3:  1;
            setColumnCount(newColumnCount);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
        }, []);
    

  const rowCount = Math.ceil(items.length / 4);


  const itemWidth = 500;
  const itemHeight = 200;

  // Render a single item
  const renderItem = ({ rowIndex, columnIndex, style }: any) => {
    const index = rowIndex * columnCount + columnIndex;
    if (index >= items?.length) return null;

    return (
      <div style={style}>
        <GridItem index={items[index]} />
      </div>
    );
  };

  return (
    <div style={{height: '90vh', width: '100vw'}}>
         <AutoSizer>
             {({ height, width }: any) => (
    <Grid
      className="grid-container"
      columnCount={columnCount}
      columnWidth={width / columnCount- 30}
      height={window.innerHeight - 80}
      rowCount={rowCount}
      rowHeight={700}
      width={width}
    >
      {renderItem}
    </Grid>
     )}
     </AutoSizer>
    </div>
  );
};

export default GridContainer;
