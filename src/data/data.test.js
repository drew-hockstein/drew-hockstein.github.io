import { describe, it, expect } from 'vitest';
import { skillCategories } from './skills';
import { contactInfo } from './contactInfo';

describe('skillCategories data structure', () => {
  it('should be an array', () => {
    expect(Array.isArray(skillCategories)).toBe(true);
  });

  it('each category has a title and skills array', () => {
    skillCategories.forEach((category) => {
      expect(typeof category.title).toBe('string');
      expect(Array.isArray(category.skills)).toBe(true);
    });
  });
});

describe('contactInfo data structure', () => {
  it('should be an array', () => {
    expect(Array.isArray(contactInfo)).toBe(true);
  });

  it('each contact has title, value, icon, and link', () => {
    contactInfo.forEach((info) => {
      expect(typeof info.title).toBe('string');
      expect(typeof info.value).toBe('string');
      expect(typeof info.icon).toBe('string');
      expect(typeof info.link).toBe('string');
    });
  });
});
