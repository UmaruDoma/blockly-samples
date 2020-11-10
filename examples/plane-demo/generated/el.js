---
title: "Plane"
description: "Using Closure Templates to support 35 languages."
files:
  - "index.html"
  - "soy/soyutils.js"
  - "blocks.js"
  - "plane.js"
  - "slider.js"
  - "style.css"
  - "generated/*.js"
pageRoot: "examples/plane-demo"

---
// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace planepage.
 */

if (typeof planepage == 'undefined') {
  var planepage = {};
}


planepage.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Plane_rows">\u03A3\u03B5\u03B9\u03C1\u03AD\u03C2: %1</span><span id="Plane_getRows">\u03C3\u03B5\u03B9\u03C1\u03AD\u03C2 (%1)</span><span id="Plane_rows1">\u03A3\u03B5\u03B9\u03C1\u03AD\u03C2 1\u03B7\u03C2 \u03B8\u03AD\u03C3\u03B7\u03C2: %1</span><span id="Plane_getRows1">\u03A3\u03B5\u03B9\u03C1\u03AD\u03C2 1\u03B7\u03C2 \u03B8\u03AD\u03C3\u03B7\u03C2 (%1)</span><span id="Plane_rows2">\u03A3\u03B5\u03B9\u03C1\u03AD\u03C2 2\u03B7\u03C2 \u03B8\u03AD\u03C3\u03B7\u03C2: %1</span><span id="Plane_getRows2">\u03A3\u03B5\u03B9\u03C1\u03AD\u03C2 2\u03B7\u03C2 \u03B8\u03AD\u03C3\u03B7\u03C2 (%1)</span><span id="Plane_seats">\u039A\u03B1\u03B8\u03AF\u03C3\u03BC\u03B1\u03C4\u03B1: %1</span><span id="Plane_placeholder">;</span><span id="Plane_setSeats">\u03BA\u03B1\u03B8\u03AF\u03C3\u03BC\u03B1\u03C4\u03B1 =</span></div>';
};
if (goog.DEBUG) {
  planepage.messages.soyTemplateName = 'planepage.messages';
}


planepage.start = function(opt_data, opt_ignored, opt_ijData) {
  let output = planepage.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1><a href="https://developers.google.com/blockly/">Blockly</a>&rlm; &gt; <a href="../index.html">Demos</a>&rlm; &gt; <span id="title">\u03A5\u03C0\u03BF\u03BB\u03BF\u03B3\u03B9\u03C3\u03BC\u03CC\u03C2 \u0398\u03AD\u03C3\u03B5\u03C9\u03BD \u03A3\u03B5 \u0391\u03B5\u03C1\u03BF\u03C0\u03BB\u03AC\u03BD\u03BF</span> &nbsp; ';
  const iLimit47 = opt_ijData.maxLevel + 1;
  for (let i47 = 1; i47 < iLimit47; i47++) {
    output += ' ' + ((i47 == opt_ijData.level) ? '<span class="tab" id="selected">' + soy.$$escapeHtml(i47) + '</span>' : (i47 < opt_ijData.level) ? '<a class="tab previous" href="?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&level=' + soy.$$escapeHtml(i47) + '">' + soy.$$escapeHtml(i47) + '</a>' : '<a class="tab" href="?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&level=' + soy.$$escapeHtml(i47) + '">' + soy.$$escapeHtml(i47) + '</a>');
  }
  output += '</h1></td><td class="farSide"><span ' + ((opt_ijData.lang == 'en') ? 'id="languageBorder"' : '') + ' style="padding: 10px"><select id="languageMenu"></select></span></td></tr></table><script src="slider.js"><\/script><svg id="plane" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="600" height="320" viewBox="0 110 600 320"><defs><g id="row1st"><rect class="seat1st" width="10" height="10" x="75" y="243" /><rect class="seat1st" width="10" height="10" x="75" y="254" /><rect class="seat1st" width="10" height="10" x="75" y="272" /><rect class="seat1st" width="10" height="10" x="75" y="283" /></g><g id="row2nd"><rect class="seat2nd" width="10" height="8" x="75" y="243" /><rect class="seat2nd" width="10" height="8" x="75" y="251" /><rect class="seat2nd" width="10" height="8" x="75" y="269" /><rect class="seat2nd" width="10" height="8" x="75" y="277" /><rect class="seat2nd" width="10" height="8" x="75" y="285" /></g><linearGradient id="grad1" x1="0%" y1="100%" x2="0%" y2="0%"><stop offset="0%" style="stop-color:#fff;stop-opacity:0" /><stop offset="100%" style="stop-color:#fff;stop-opacity:1" /></linearGradient><linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:#fff;stop-opacity:0" /><stop offset="100%" style="stop-color:#fff;stop-opacity:1" /></linearGradient></defs><path d="m 214,270 l 159,-254 31,-16 -74,189 0,162 74,189 -31,16 z" id="wing" /><path d="m 577,270 22,-93 -27,6 -44,88 44,88 27,6 z" id="tail" /><path d="m 577,270 l -94,24 h -407 c -38,0 -75,-13 -75,-26 c 0,-13 38,-26 75,-26 h 407 z" id="fuselage" /><rect width="610" height="100" x="-5" y="110" fill="url(#grad1)" /><rect width="610" height="100" x="-5" y="330" fill="url(#grad2)" /><text id="row1stText" x="55" y="380"></text><text id="row2ndText" x="55" y="420"></text><text x="55" y="210"><tspan id="seatText"></tspan><tspan id="seatYes" style="fill: #0c0;" dy="10">&#x2713;</tspan><tspan id="seatNo" style="fill: #f00;" dy="10">&#x2717;</tspan></text>' + ((opt_ijData.level > 1) ? '<rect id="crew_right" class="crew" width="10" height="10" x="35" y="254" /><rect id="crew_left" class="crew" width="10" height="10" x="35" y="272" />' : '') + '</svg><p>';
  switch (opt_ijData.level) {
    case 1:
      output += '\u0388\u03BD\u03B1 \u03B1\u03B5\u03C1\u03BF\u03C0\u03BB\u03AC\u03BD\u03BF \u03AD\u03C7\u03B5\u03B9 \u03AD\u03BD\u03B1\u03BD \u03C3\u03C5\u03B3\u03BA\u03B5\u03BA\u03C1\u03B9\u03BC\u03AD\u03BD\u03BF \u03B1\u03C1\u03B9\u03B8\u03BC\u03CC \u03C3\u03B5\u03B9\u03C1\u03CE\u03BD \u03BA\u03B1\u03B8\u03B9\u03C3\u03BC\u03AC\u03C4\u03C9\u03BD \u03B5\u03C0\u03B9\u03B2\u03B1\u03C4\u03CE\u03BD. \u039A\u03AC\u03B8\u03B5 \u03C3\u03B5\u03B9\u03C1\u03AC \u03AD\u03C7\u03B5\u03B9 \u03C4\u03AD\u03C3\u03C3\u03B5\u03C1\u03B1 \u03BA\u03B1\u03B8\u03AF\u03C3\u03BC\u03B1\u03C4\u03B1.';
      break;
    case 2:
      output += '\u0388\u03BD\u03B1 \u03B1\u03B5\u03C1\u03BF\u03C0\u03BB\u03AC\u03BD\u03BF \u03AD\u03C7\u03B5\u03B9 \u03B4\u03CD\u03BF \u03BA\u03B1\u03B8\u03AF\u03C3\u03BC\u03B1\u03C4\u03B1 \u03C3\u03C4\u03BF\u03BD \u03B8\u03AC\u03BB\u03B1\u03BC\u03BF \u03B4\u03B9\u03B1\u03BA\u03C5\u03B2\u03AD\u03C1\u03BD\u03B7\u03C3\u03B7\u03C2 (\u03B3\u03B9\u03B1 \u03C4\u03BF\u03BD \u03BA\u03C5\u03B2\u03B5\u03C1\u03BD\u03AE\u03C4\u03B7 \u03BA\u03B1\u03B9 \u03C4\u03BF\u03BD \u03C3\u03C5\u03B3\u03BA\u03C5\u03B2\u03B5\u03C1\u03BD\u03AE\u03C4\u03B7), \u03BA\u03B1\u03B8\u03CE\u03C2 \u03BA\u03B1\u03B9 \u03AD\u03BD\u03B1\u03BD \u03B1\u03C1\u03B9\u03B8\u03BC\u03CC \u03B1\u03C0\u03CC \u03C3\u03B5\u03B9\u03C1\u03AD\u03C2 \u03BA\u03B1\u03B8\u03B9\u03C3\u03BC\u03AC\u03C4\u03C9\u03BD \u03B5\u03C0\u03B9\u03B2\u03B1\u03C4\u03CE\u03BD.  \u039A\u03AC\u03B8\u03B5 \u03C3\u03B5\u03B9\u03C1\u03AC \u03AD\u03C7\u03B5\u03B9 \u03C4\u03AD\u03C3\u03C3\u03B5\u03C1\u03B1 \u03BA\u03B1\u03B8\u03AF\u03C3\u03BC\u03B1\u03C4\u03B1.';
      break;
    case 3:
      output += '\u0388\u03BD\u03B1 \u03B1\u03B5\u03C1\u03BF\u03C0\u03BB\u03AC\u03BD\u03BF \u03AD\u03C7\u03B5\u03B9 \u03B4\u03CD\u03BF \u03BA\u03B1\u03B8\u03AF\u03C3\u03BC\u03B1\u03C4\u03B1 \u03C3\u03C4\u03BF\u03BD \u03B8\u03AC\u03BB\u03B1\u03BC\u03BF \u03B4\u03B9\u03B1\u03BA\u03C5\u03B2\u03AD\u03C1\u03BD\u03B7\u03C3\u03B7\u03C2 (\u03B3\u03B9\u03B1 \u03C4\u03BF\u03BD \u03BA\u03C5\u03B2\u03B5\u03C1\u03BD\u03AE\u03C4\u03B7 \u03BA\u03B1\u03B9 \u03C4\u03BF\u03BD \u03C3\u03C5\u03B3\u03BA\u03C5\u03B2\u03B5\u03C1\u03BD\u03AE\u03C4\u03B7), \u03BA\u03B1\u03B8\u03CE\u03C2 \u03BA\u03B1\u03B9 \u03AD\u03BD\u03B1\u03BD \u03B1\u03C1\u03B9\u03B8\u03BC\u03CC \u03C3\u03B5\u03B9\u03C1\u03CE\u03BD \u03BA\u03B1\u03B8\u03B9\u03C3\u03BC\u03AC\u03C4\u03C9\u03BD \u03B3\u03B9\u03B1 \u03C4\u03B7\u03BD 1\u03B7 \u03BA\u03B1\u03B9 2\u03B7 \u03B8\u03AD\u03C3\u03B7. \u039A\u03AC\u03B8\u03B5 \u03C3\u03B5\u03B9\u03C1\u03AC \u03C4\u03B7\u03C2 1\u03B7\u03C2 \u03B8\u03AD\u03C3\u03B7\u03C2 \u03AD\u03C7\u03B5\u03B9 \u03C4\u03AD\u03C3\u03C3\u03B5\u03C1\u03B1 \u03BA\u03B1\u03B8\u03AF\u03C3\u03BC\u03B1\u03C4\u03B1 \u03BA\u03B1\u03B9 \u03BA\u03AC\u03B8\u03B5 \u03C3\u03B5\u03B9\u03C1\u03AC \u03C4\u03B7\u03C2 2\u03B7\u03C2 \u03B8\u03AD\u03C3\u03B7\u03C2 \u03AD\u03C7\u03B5\u03B9 \u03C0\u03AD\u03BD\u03C4\u03B5 \u03BA\u03B1\u03B8\u03AF\u03C3\u03BC\u03B1\u03C4\u03B1.';
      break;
  }
  output += '</p><p>\u03A6\u03C4\u03B9\u03AC\u03BE\u03B5 \u03AD\u03BD\u03B1\u03BD \u03C4\u03CD\u03C0\u03BF (\u03BA\u03AC\u03C4\u03C9) \u03C0\u03BF\u03C5 \u03B8\u03B1 \u03C5\u03C0\u03BF\u03BB\u03BF\u03B3\u03AF\u03B6\u03B5\u03B9 \u03C4\u03BF\u03BD \u03C3\u03C5\u03BD\u03BF\u03BB\u03B9\u03BA\u03CC \u03B1\u03C1\u03B9\u03B8\u03BC\u03CC \u03BA\u03B1\u03B8\u03B9\u03C3\u03BC\u03AC\u03C4\u03C9\u03BD \u03C4\u03BF\u03C5 \u03B1\u03B5\u03C1\u03BF\u03C0\u03BB\u03AC\u03BD\u03BF\u03C5 \u03BA\u03B1\u03B8\u03CE\u03C2 \u03B1\u03BB\u03BB\u03AC\u03B6\u03BF\u03C5\u03BD \u03BF\u03B9 \u03C3\u03B5\u03B9\u03C1\u03AD\u03C2 (\u03C0\u03AC\u03BD\u03C9).</p><script src="https://unpkg.com/blockly/blockly_compressed.js"><\/script><script src="https://unpkg.com/blockly/blocks_compressed.js"><\/script><script src="https://unpkg.com/blockly/javascript_compressed.js"><\/script><script src="https://unpkg.com/blockly/msg/' + soy.$$escapeHtml(opt_ijData.lang) + '.js"><\/script><script src="blocks.js"><\/script>' + planepage.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>';
  return output;
};
if (goog.DEBUG) {
  planepage.start.soyTemplateName = 'planepage.start';
}


planepage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none"><block type="math_number"></block><block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>' + ((opt_ijData.level <= 2) ? '<block type="plane_get_rows"></block>' : '<block type="plane_get_rows1st"></block><block type="plane_get_rows2nd"></block>') + '</xml>';
};
if (goog.DEBUG) {
  planepage.toolbox.soyTemplateName = 'planepage.toolbox';
}