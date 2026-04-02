import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from 'react';

function ButtonGroupSwitch(): any {
  const [active, setActive] = useState(0);

  return (
      <ButtonGroup
          // 在这里修改样式
          sx={{
            px: "16px",
            py: "24px",
            border: 'none',
            gap: '4px',
            '& .MuiButtonGroup-grouped': {
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
              fontFamily: "'rem','sans-serif'",
              fontSize: "16px",
              border: '2px solid !important',
              textTransform: 'none',
              fontWeight: 'medium',
              px: '10px',
              py: "2px",
              // 默认未选中状态
              borderColor: '#e0e0e0 !important',
              color: '#757575',
              backgroundColor: 'white',
              borderRadius: '4px !important',

              '&:hover': {
                backgroundColor: '#fafafa',
                borderColor: '#bdbdbd !important',
              },

              '&:first-of-type': {
                borderTopLeftRadius: '12px !important',
                borderBottomLeftRadius: '12px !important',
              },
              '&:last-of-type': {
                borderTopRightRadius: '12px !important',
                borderBottomRightRadius: '12px !important',
              },

              // 这边处理一下层叠的问题
              '&.active-btn': {
                borderColor: '#ff9800 !important',
                color: '#ff9800',
                zIndex: 1,
              },
            },
          }}
      >
        <Button
            className={active === 0 ? 'active-btn' : ''}
            onClick={() => setActive(0)}
        >
          HOT
        </Button>

        <Button
            className={active === 1 ? 'active-btn' : ''}
            onClick={() => setActive(1)}
        >
          NEWEST
        </Button>

        {/*<Button*/}
        {/*    className={active === 2 ? 'active-btn' : ''}*/}
        {/*    onClick={() => setActive(2)}*/}
        {/*>*/}
        {/*  TEST*/}
        {/*</Button>*/}
      </ButtonGroup>
  );
}

export default ButtonGroupSwitch;