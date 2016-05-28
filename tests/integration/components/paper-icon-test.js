import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('paper-icon', 'Integration | Component | paper icon', {
  integration: true
});

test('it renders with tag name', function(assert) {
  assert.expect(1);

  this.render(hbs`{{paper-icon icon="check"}}`);

  assert.ok(this.$('md-icon').length);
});

test('it renders with classes', function(assert) {
  assert.expect(5);

  this.set('icon', 'foo');
  this.render(hbs`{{paper-icon icon}}`);

  let $component = this.$('md-icon');

  assert.ok($component.hasClass('paper-icon'));
  assert.ok($component.hasClass('material-icons'));
  assert.equal($component.text(), 'foo');
  this.set('icon', 'bar');
  assert.equal($component.text(), 'bar');
  assert.notEqual($component.text(), 'foo');
});

test('it renders with spin class', function(assert) {
  assert.expect(2);

  this.set('spin', true);
  this.render(hbs`{{paper-icon "check" spin=spin}}`);

  let $component = this.$('md-icon');

  assert.ok($component.hasClass('md-spin'));

  this.set('spin', false);
  assert.notOk($component.hasClass('md-spin'));
});

test('it renders with reverse spin class', function(assert) {
  assert.expect(2);

  this.set('reverseSpin', true);
  this.render(hbs`{{paper-icon "check" reverseSpin=reverseSpin}}`);

  let $component = this.$('md-icon');

  assert.ok($component.hasClass('md-spin-reverse'));

  this.set('reverseSpin', false);
  assert.notOk($component.hasClass('md-spin-reverse'));
});

test('it renders with size styles', function(assert) {
  assert.expect(10);

  this.set('size', 12);
  this.render(hbs`{{paper-icon "check" size=size}}`);

  let $component = this.$('md-icon');

  assert.equal($component.css('font-size'), '12px');
  assert.equal($component.css('height'), '12px');

  this.set('size', 18);
  assert.equal($component.css('font-size'), '18px');
  assert.equal($component.css('height'), '18px');

  this.set('size', 24);
  assert.equal($component.css('font-size'), '24px');
  assert.equal($component.css('height'), '24px');

  this.set('size', 36);
  assert.equal($component.css('font-size'), '36px');
  assert.equal($component.css('height'), '36px');

  this.set('size', 48);
  assert.equal($component.css('font-size'), '48px');
  assert.equal($component.css('height'), '48px');
});

test('it renders with a default aria-label of the icon', function(assert) {
  assert.expect(2);

  this.set('icon', 'foo-bar');
  this.render(hbs`{{paper-icon icon}}`);

  let $component = this.$('md-icon');

  assert.equal($component.attr('aria-label'), 'foo-bar');

  this.set('icon', 'bar-baz');

  assert.equal($component.attr('aria-label'), 'bar-baz');
});

test('it renders with a provided aria-label', function(assert) {
  assert.expect(2);

  this.set('ariaLabel', 'foo-bar');
  this.render(hbs`{{paper-icon "check" aria-label=ariaLabel}}`);

  let $component = this.$('md-icon');

  assert.equal($component.attr('aria-label'), 'foo-bar');

  this.set('ariaLabel', 'bar-baz');

  assert.equal($component.attr('aria-label'), 'bar-baz');
});

test('it renders the correct ligature when given a dashed or underscored icon name', function(assert) {
  assert.expect(2);

  this.set('iconName', 'aspect-ratio');
  this.render(hbs`{{paper-icon iconName}}`);

  let $component = this.$('md-icon');

  assert.equal($component.text().trim(), 'aspect_ratio');

  this.set('iconName', 'aspect_ratio');

  assert.equal($component.text().trim(), 'aspect_ratio');
});
