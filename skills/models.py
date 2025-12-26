from django.db import models


class SkillCategory(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = "Skill Categories"
        ordering = ['order']

    def __str__(self):
        return self.name


class Skill(models.Model):
    name = models.CharField(max_length=100)
    proficiency_level = models.IntegerField(
        choices=[(i, f'{i}%') for i in range(0, 101)], 
        help_text="Proficiency level from 0 to 100%"
    )
    category = models.ForeignKey(SkillCategory, related_name='skills', on_delete=models.CASCADE)
    description = models.TextField(blank=True, null=True)
    icon = models.CharField(max_length=50, blank=True, null=True, 
                           help_text="Font awesome icon class or similar")
    is_active = models.BooleanField(default=True)
    order = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.name