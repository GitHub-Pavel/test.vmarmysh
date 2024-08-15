import {FC, MouseEvent, useState} from "react";
import {TreeMenu} from "@/entities/tree-menu";
import {CardPropsInterface} from "./card.types";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import {Collapse, List, ListItem, ListItemButton, ListItemText, styled} from "@mui/material";

const Item = styled(ListItem)`
    flex-direction: column;
    align-items: stretch;
`

const MenuWrap = styled('div')`
    display: flex;
    min-height: 40px;
`

const ItemText = styled(ListItemText)`
    flex: none;
    margin-right: 10px;
`

export const Card: FC<CardPropsInterface> = ({
    tree,
    showMenuState,
    menu = TreeMenu
}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [numberOfMenu, setNumberOfMenu] = showMenuState
    const isOpenMenu = numberOfMenu === tree.id
    const handleClick = (e: MouseEvent<HTMLDivElement>) => {
        const el = e.target as HTMLElement
        if (el.closest('.tree-menu') || el.classList.contains('tree-menu')) return
        setIsOpen(!isOpen)
        setNumberOfMenu(tree.id)
    }
    const TreeIcon = isOpen ? ExpandLess : ExpandMore
    const Menu = menu

    return (
        <Item disablePadding>
            <ListItemButton onClick={handleClick}>
                {tree.children.length>0 && (
                    <TreeIcon sx={{mr: 1}} />
                )}
                <ItemText primary={tree.name} />
                <MenuWrap className='tree-menu'>
                    {isOpenMenu && (
                            <Menu tree={tree} />
                    )}
                </MenuWrap>
            </ListItemButton>
            {tree.children.length>0 && (
                <Collapse in={isOpen} timeout="auto" unmountOnExit>
                    <List disablePadding sx={{ pl: 4 }}>
                        {tree.children.map(childTree => (
                            <Card
                                tree={childTree}
                                key={childTree.id}
                                showMenuState={showMenuState}
                            />
                        ))}
                    </List>
                </Collapse>
            )}
        </Item>
    )
}