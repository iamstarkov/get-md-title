import { isHeader, isLevel, match, text, html } from 'commonmark-helpers';
import { partialRight } from 'ramda';
import trimTag from 'trim-html-tag';

const isTitle = node => isHeader(node) && isLevel(node, 1);
const matchTitle = partialRight(match, isTitle);

export default input => ({
  text: text(matchTitle(input)),
  html: trimTag('h1', html(matchTitle(input))),
  node: matchTitle(input)
});
