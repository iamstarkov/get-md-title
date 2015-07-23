import { isHeader, isLevel, match, text, html } from 'commonmark-helpers';
import { partialRight } from 'ramda';
import trimTag from 'trim-html-tag';

const isTitle = node => isHeader(node) && isLevel(node, 1);
const matchTitle = partialRight(match, isTitle);

const result = node => ({
  text: text(node),
  html: trimTag('h1', html(node)),
  node
})

export default input => result(matchTitle(input));
