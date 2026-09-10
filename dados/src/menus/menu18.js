export default async function menuPlaquinhas(prefix, botName = "MeuBot", userName = "Usuário", {
    header = `╭┈⊰ 🌸 『 *${botName}* 』\n┊Olá, #user#!\n╰─┈┈┈┈┈◜༆◞┈┈┈┈┈─╯`,
    menuTopBorder = "╭┈",
    bottomBorder = "╰─┈┈┈┈┈◜༆◞┈┈┈┈┈─╯",
    menuTitleIcon = "🍧ฺꕸ▸",
    menuItemIcon = "•.̇𖥨֗💜⭟",
    separatorIcon = "༆",
    middleBorder = "┊",
    PlaquinhasTitle = "🪧 PLAQUINHAS"
} = {}) {
    const formattedHeader = header.replace(/#user#/g, userName);
    return `${formattedHeader}

${menuTopBorder}${separatorIcon} *${PlaquinhasTitle}*
${middleBorder}
${middleBorder}${menuItemIcon}${prefix}Plaq1
${middleBorder}${menuItemIcon}${prefix}Plaq2
${middleBorder}${menuItemIcon}${prefix}Plaq3
${middleBorder}${menuItemIcon}${prefix}Plaq4
${middleBorder}${menuItemIcon}${prefix}Plaq5
${middleBorder}${menuItemIcon}${prefix}Plaq6
${middleBorder}${menuItemIcon}${prefix}Plaq7
${middleBorder}${menuItemIcon}${prefix}Plaq8
${middleBorder}${menuItemIcon}${prefix}Plaq9
${middleBorder}${menuItemIcon}${prefix}plaq10
${bottomBorder}`;
}
