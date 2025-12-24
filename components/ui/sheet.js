
// Sheet is an alias for Drawer for API compatibility with shadcn
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from './drawer';
export const Sheet = Drawer;
export const SheetContent = DrawerContent;
export const SheetHeader = DrawerHeader;
export const SheetTitle = DrawerTitle;
export const SheetDescription = DrawerDescription;
export const SheetFooter = DrawerFooter;
export const SheetClose = DrawerClose;
export const SheetTrigger = ({ children, onClick }) => React.cloneElement(children, { onClick });
