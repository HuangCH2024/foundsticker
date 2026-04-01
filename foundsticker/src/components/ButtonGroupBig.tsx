import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from 'react';

function ButtonGroupBig(): any {
  const [active, setActive] = useState(0);

  return (
      <ButtonGroup
          // 关键 1: 移除 variant="outlined" 的默认边框逻辑，完全由 sx 接管
          sx={{
            px: "16px",
            py: "24px",
            border: 'none',
            gap: '4px', // 关键 2: 直接通过 flex gap 实现 4px 间隔
            '& .MuiButtonGroup-grouped': {
              // 关键 3: 强制让每个按钮的 4 条边框都显示出来
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
              borderRadius: '4px !important', // 默认夹角圆角为 4px

              '&:hover': {
                backgroundColor: '#fafafa',
                borderColor: '#bdbdbd !important',
              },

              // 关键 4: 处理首尾的大圆角
              '&:first-of-type': {
                borderTopLeftRadius: '12px !important',
                borderBottomLeftRadius: '12px !important',
              },
              '&:last-of-type': {
                borderTopRightRadius: '12px !important',
                borderBottomRightRadius: '12px !important',
              },

              // 关键 5: 处理选中状态的样式覆盖
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

export default ButtonGroupBig;