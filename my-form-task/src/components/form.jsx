import { useState } from 'react';
import Page from './page';
import ScrollArea from './scrollArea';
import Button from './button';
import { pages } from '../data/pages';

const FormContainer = () => {
  const [selectedPages, setSelectedPages] = useState([]);

  const allSelected = selectedPages.length === pages.length;

  const toggleAll = () => {
    if (allSelected) {
      setSelectedPages([]);
    } else {
      setSelectedPages(pages.map((p) => p.id));
    }
  };

  const togglePage = (id) => {
    if (selectedPages.includes(id)) {
      setSelectedPages(selectedPages.filter((pageId) => pageId !== id));
    } else {
      setSelectedPages([...selectedPages, id]);
    }
  };

  const formStyle = {
    width: '370px',
    height: '326px',
    backgroundColor: '#FFFFFF',
    borderRadius: '8px',
    border: '1px solid #EEEEEE',
    boxShadow:
      '0px 8px 15px 0px rgba(20, 20, 20, 0.12), 0px 0px 4px 0px rgba(20, 20, 20, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    fontFamily: 'Montserrat, sans-serif',
  };

  const headerStyle = {
    padding: '16px 16px 8px 16px',
  };

  const scrollContainerStyle = {
    flex: 1,
    padding: '0 16px',
  };

  const borderStyle = {
    height: '0.7px',
    backgroundColor: '#CDCDCD',
    margin: '0 15px',
  };

  const buttonContainerStyle = {
    padding: '16px',
  };

  return (
    <div style={formStyle}>
      <div style={headerStyle}>
        <Page
          label="All pages"
          isHeader={true}
          isSelected={allSelected}
          onToggle={toggleAll}
        />
      </div>

      <div style={borderStyle}></div>

      <div style={scrollContainerStyle}>
        <ScrollArea>
          {pages.map((page) => (
            <Page
              key={page.id}
              label={page.title}
              isSelected={selectedPages.includes(page.id)}
              onToggle={() => togglePage(page.id)}
            />
          ))}
        </ScrollArea>
      </div>

      <div style={borderStyle}></div>

      <div style={buttonContainerStyle}>
        <Button text="Done" />
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default FormContainer;
