from __future__ import annotations
from collections.abc import Iterable, Iterator
from typing import Any, List


class CustomIterator(Iterator):

    def __init__(self, collection: ClothesCollection):
        self._collection = collection
        self._position = 0

    def __next__(self):
        try:
            value = self._collection[self._position]
            self._position += 1
        except IndexError:
            raise StopIteration()

        return value


class ClothesCollection(Iterable):

    def __init__(self, collection: List[Any] = []):
        self._collection = collection

    def __iter__(self):
        return CustomIterator(self._collection)

    def add_item(self, item: Any):
        self._collection.append(item)


