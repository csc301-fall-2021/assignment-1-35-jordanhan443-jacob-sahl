import uuid as uuid
from django.db import models


class Item(models.Model):
    item_name = models.CharField(max_length=100)
    item_price = models.FloatField()

    # a 13% tax -> tax_rate is 0.13
    tax_rate = models.FloatField(default=0.13)

    def __str__(self):
        return self.item_name
    """
    def calculate_tax(self):
        return self.item_price * self.tax_rate

    def get_tax_rate(self):
        return self.tax_rate

    def calculate_total(self):
        return self.item_price * (1 + self.tax_rate)
    """

