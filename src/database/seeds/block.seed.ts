const Blocks = [
  {
    opcode: 'motion_movesteps',
    fileId: 1,
    blockCategoryId: 1,
  },
  {
    opcode: 'motion_turnright',
    fileId: 1,
    blockCategoryId: 1,
  },
  {
    opcode: 'motion_turnleft',
    fileId: 1,
    blockCategoryId: 1,
  },
  {
    opcode: 'motion_goto',
    fileId: 1,
    blockCategoryId: 1,
  },
  {
    opcode: 'motion_gotoxy',
    fileId: 1,
    blockCategoryId: 1,
  },
  {
    opcode: 'motion_glideto',
    fileId: 1,
    blockCategoryId: 1,
  },
  {
    opcode: 'motion_glidesecstoxy',
    fileId: 1,
    blockCategoryId: 1,
  },
  {
    opcode: 'motion_pointindirection',
    fileId: 1,
    blockCategoryId: 1,
  },
  {
    opcode: 'motion_pointtowards',
    fileId: 1,
    blockCategoryId: 1,
  },
  {
    opcode: 'motion_changexby',
    fileId: 1,
    blockCategoryId: 1,
  },
  {
    opcode: 'motion_setx',
    fileId: 1,
    blockCategoryId: 1,
  },
  {
    opcode: 'motion_changeyby',
    fileId: 1,
    blockCategoryId: 1,
  },
  {
    opcode: 'motion_sety',
    fileId: 1,
    blockCategoryId: 1,
  },
  {
    opcode: 'motion_ifonedgebounce',
    fileId: 1,
    blockCategoryId: 1,
  },
  {
    opcode: 'motion_setrotationstyle',
    fileId: 1,
    blockCategoryId: 1,
  },
  {
    opcode: 'motion_xposition',
    fileId: 1,
    blockCategoryId: 1,
  },
  {
    opcode: 'motion_yposition',
    fileId: 1,
    blockCategoryId: 1,
  },
  {
    opcode: 'motion_direction',
    fileId: 1,
    blockCategoryId: 1,
  },

  {
    opcode: 'looks_sayforsecs',
    fileId: 1,
    blockCategoryId: 2,
  },
  {
    opcode: 'looks_say',
    fileId: 1,
    blockCategoryId: 2,
  },
  {
    opcode: 'looks_thinkforsecs',
    fileId: 1,
    blockCategoryId: 2,
  },
  {
    opcode: 'looks_think',
    fileId: 1,
    blockCategoryId: 2,
  },
  {
    opcode: 'looks_switchcostumeto',
    fileId: 1,
    blockCategoryId: 2,
  },
  {
    opcode: 'looks_nextcostume',
    fileId: 1,
    blockCategoryId: 2,
  },
  {
    opcode: 'looks_switchbackdropto',
    fileId: 1,
    blockCategoryId: 2,
  },
  {
    opcode: 'looks_nextbackdrop',
    fileId: 1,
    blockCategoryId: 2,
  },
  {
    opcode: 'looks_changesizeby',
    fileId: 1,
    blockCategoryId: 2,
  },
  {
    opcode: 'looks_setsizeto',
    fileId: 1,
    blockCategoryId: 2,
  },
  {
    opcode: 'looks_changeeffectby',
    fileId: 1,
    blockCategoryId: 2,
  },
  {
    opcode: 'looks_seteffectto',
    fileId: 1,
    blockCategoryId: 2,
  },
  {
    opcode: 'looks_cleargraphiceffects',
    fileId: 1,
    blockCategoryId: 2,
  },
  {
    opcode: 'looks_show',
    fileId: 1,
    blockCategoryId: 2,
  },
  {
    opcode: 'looks_hide',
    fileId: 1,
    blockCategoryId: 2,
  },
  {
    opcode: 'looks_gotofrontback',
    fileId: 1,
    blockCategoryId: 2,
  },
  {
    opcode: 'looks_goforwardbackwardlayers',
    fileId: 1,
    blockCategoryId: 2,
  },
  {
    opcode: 'looks_costumenumbername',
    fileId: 1,
    blockCategoryId: 2,
  },
  {
    opcode: 'looks_backdropnumbername',
    fileId: 1,
    blockCategoryId: 2,
  },
  {
    opcode: 'looks_size',
    fileId: 1,
    blockCategoryId: 2,
  },

  {
    opcode: 'sound_playuntildone',
    fileId: 1,
    blockCategoryId: 3,
  },
  {
    opcode: 'sound_play',
    fileId: 1,
    blockCategoryId: 3,
  },
  {
    opcode: 'sound_stopallsounds',
    fileId: 1,
    blockCategoryId: 3,
  },
  {
    opcode: 'sound_changeeffectby',
    fileId: 1,
    blockCategoryId: 3,
  },
  {
    opcode: 'sound_seteffectto',
    fileId: 1,
    blockCategoryId: 3,
  },
  {
    opcode: 'sound_cleareffects',
    fileId: 1,
    blockCategoryId: 3,
  },
  {
    opcode: 'sound_changevolumeby',
    fileId: 1,
    blockCategoryId: 3,
  },
  {
    opcode: 'sound_setvolumeto',
    fileId: 1,
    blockCategoryId: 3,
  },
  {
    opcode: 'sound_volume',
    fileId: 1,
    blockCategoryId: 3,
  },

  {
    opcode: 'event_whenflagclicked',
    fileId: 1,
    blockCategoryId: 4,
  },
  {
    opcode: 'event_whenthisspriteclicked',
    fileId: 1,
    blockCategoryId: 4,
  },

  {
    opcode: 'event_whenbackdropswitchesto',
    fileId: 1,
    blockCategoryId: 4,
  },
  {
    opcode: 'event_whengreaterthan',
    fileId: 1,
    blockCategoryId: 4,
  },
  {
    opcode: 'event_whenbroadcastreceived',
    fileId: 1,
    blockCategoryId: 4,
  },
  {
    opcode: 'event_broadcast',
    fileId: 1,
    blockCategoryId: 4,
  },
  {
    opcode: 'event_broadcastandwait',
    fileId: 1,
    blockCategoryId: 4,
  },

  {
    opcode: 'control_wait',
    fileId: 1,
    blockCategoryId: 5,
  },
  {
    opcode: 'control_repeat',
    fileId: 1,
    blockCategoryId: 5,
  },
  {
    opcode: 'control_forever',
    fileId: 1,
    blockCategoryId: 5,
  },
  {
    opcode: 'control_if',
    fileId: 1,
    blockCategoryId: 5,
  },
  {
    opcode: 'control_if_else',
    fileId: 1,
    blockCategoryId: 5,
  },
  {
    opcode: 'control_wait_until',
    fileId: 1,
    blockCategoryId: 5,
  },
  {
    opcode: 'control_repeat_until',
    fileId: 1,
    blockCategoryId: 5,
  },
  {
    opcode: 'control_stop',
    fileId: 1,
    blockCategoryId: 5,
  },
  {
    opcode: 'control_start_as_clone',
    fileId: 1,
    blockCategoryId: 5,
  },
  {
    opcode: 'control_create_clone_of',
    fileId: 1,
    blockCategoryId: 5,
  },
  {
    opcode: 'control_delete_this_clone',
    fileId: 1,
    blockCategoryId: 5,
  },

  {
    opcode: 'sensing_touchingobject',
    fileId: 1,
    blockCategoryId: 6,
  },
  {
    opcode: 'sensing_touchingcolor',
    fileId: 1,
    blockCategoryId: 6,
  },
  {
    opcode: 'sensing_coloristouchingcolor',
    fileId: 1,
    blockCategoryId: 6,
  },
  {
    opcode: 'sensing_distanceto',
    fileId: 1,
    blockCategoryId: 6,
  },
  {
    opcode: 'sensing_askandwait',
    fileId: 1,
    blockCategoryId: 6,
  },
  {
    opcode: 'sensing_answer',
    fileId: 1,
    blockCategoryId: 6,
  },
  {
    opcode: 'sensing_keypressed',
    fileId: 1,
    blockCategoryId: 6,
  },
  {
    opcode: 'sensing_mousedown',
    fileId: 1,
    blockCategoryId: 6,
  },
  {
    opcode: 'sensing_mousex',
    fileId: 1,
    blockCategoryId: 6,
  },
  {
    opcode: 'sensing_mousey',
    fileId: 1,
    blockCategoryId: 6,
  },
  {
    opcode: 'sensing_setdragmode',
    fileId: 1,
    blockCategoryId: 6,
  },
  {
    opcode: 'sensing_loudness',
    fileId: 1,
    blockCategoryId: 6,
  },
  {
    opcode: 'sensing_timer',
    fileId: 1,
    blockCategoryId: 6,
  },
  {
    opcode: 'sensing_resettimer',
    fileId: 1,
    blockCategoryId: 6,
  },
  {
    opcode: 'sensing_of',
    fileId: 1,
    blockCategoryId: 6,
  },
  {
    opcode: 'sensing_current',
    fileId: 1,
    blockCategoryId: 6,
  },
  {
    opcode: 'sensing_dayssince2000',
    fileId: 1,
    blockCategoryId: 6,
  },
  {
    opcode: 'sensing_username',
    fileId: 1,
    blockCategoryId: 6,
  },

  {
    opcode: 'operator_add',
    fileId: 1,
    blockCategoryId: 7,
  },
  {
    opcode: 'operator_subtract',
    fileId: 1,
    blockCategoryId: 7,
  },
  {
    opcode: 'operator_multiply',
    fileId: 1,
    blockCategoryId: 7,
  },
  {
    opcode: 'operator_divide',
    fileId: 1,
    blockCategoryId: 7,
  },
  {
    opcode: 'operator_random',
    fileId: 1,
    blockCategoryId: 7,
  },
  {
    opcode: 'operator_gt',
    fileId: 1,
    blockCategoryId: 7,
  },
  {
    opcode: 'operator_lt',
    fileId: 1,
    blockCategoryId: 7,
  },
  {
    opcode: 'operator_equals',
    fileId: 1,
    blockCategoryId: 7,
  },
  {
    opcode: 'operator_and',
    fileId: 1,
    blockCategoryId: 7,
  },
  {
    opcode: 'operator_or',
    fileId: 1,
    blockCategoryId: 7,
  },
  {
    opcode: 'operator_not',
    fileId: 1,
    blockCategoryId: 7,
  },
  {
    opcode: 'operator_join',
    fileId: 1,
    blockCategoryId: 7,
  },
  {
    opcode: 'operator_letter_of',
    fileId: 1,
    blockCategoryId: 7,
  },
  {
    opcode: 'operator_length',
    fileId: 1,
    blockCategoryId: 7,
  },
  {
    opcode: 'operator_contains',
    fileId: 1,
    blockCategoryId: 7,
  },
  {
    opcode: 'operator_mod',
    fileId: 1,
    blockCategoryId: 7,
  },
  {
    opcode: 'operator_round',
    fileId: 1,
    blockCategoryId: 7,
  },
  {
    opcode: 'operator_mathop',
    fileId: 1,
    blockCategoryId: 7,
  },

  {
    opcode: 'data_variable',
    fileId: 1,
    blockCategoryId: 8,
  },
  {
    opcode: 'data_setvariableto',
    fileId: 1,
    blockCategoryId: 8,
  },
  {
    opcode: 'data_changevariableby',
    fileId: 1,
    blockCategoryId: 8,
  },
  {
    opcode: 'data_showvariable',
    fileId: 1,
    blockCategoryId: 8,
  },
  {
    opcode: 'data_hidevariable',
    fileId: 1,
    blockCategoryId: 8,
  },
  {
    opcode: 'data_addtolist',
    fileId: 1,
    blockCategoryId: 8,
  },
  {
    opcode: 'data_listcontents',
    fileId: 1,
    blockCategoryId: 8,
  },
  {
    opcode: 'data_deleteoflist',
    fileId: 1,
    blockCategoryId: 8,
  },
  {
    opcode: 'data_deletealloflist',
    fileId: 1,
    blockCategoryId: 8,
  },
  {
    opcode: 'data_insertatlist',
    fileId: 1,
    blockCategoryId: 8,
  },
  {
    opcode: 'data_replaceitemoflist',
    fileId: 1,
    blockCategoryId: 8,
  },
  {
    opcode: 'data_itemoflist',
    fileId: 1,
    blockCategoryId: 8,
  },
  {
    opcode: 'data_itemnumoflist',
    fileId: 1,
    blockCategoryId: 8,
  },
  {
    opcode: 'data_lengthoflist',
    fileId: 1,
    blockCategoryId: 8,
  },
  {
    opcode: 'data_listcontainsitem',
    fileId: 1,
    blockCategoryId: 8,
  },
  {
    opcode: 'data_showlist',
    fileId: 1,
    blockCategoryId: 8,
  },
  {
    opcode: 'data_hidelist',
    fileId: 1,
    blockCategoryId: 8,
  },
];

export default Blocks;
