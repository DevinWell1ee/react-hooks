import { useState } from 'react'

// ! 自定义hook
export const useToggle = (defaultVisible = false) => {
  const [visible, setVisible] = useState(defaultVisible);

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  return [visible, show, hide];
};