from __future__ import annotations
from typing import List
from iterator import ClothesCollection


class Subject:

    def __init__(self, clothes):
        self.clothes = clothes

    _clothes = ClothesCollection()
    _observers: List[Observer] = []

    def attach(self, observer: Observer):
        print("Subject: Attached an observer.")
        self._observers.append(observer)

    def detach(self, observer: Observer):
        print("Subject: Detach an observer.")
        self._observers.remove(observer)

    def notify(self):
        print("Subject: Notifying observers...")
        for observer in self._observers:
            observer.update(self)

    def logic(self):
        self._clothes.add_item("FTP OUTER GLOW LOGO TEE")
        self._clothes.add_item("LORD KNOWS Logo Vest")
        self._clothes.add_item("TeamSesh Seshskull tee")
        self.notify()


class Observer:

    def update(self, subject: Subject):
        if subject.clothes in subject._clothes:
            print(subject.clothes + " появилась в наличии")


if __name__ == "__main__":
    subject = Subject("TeamSesh Seshskull tee")
    observer = Observer()
    subject.attach(observer)
    subject.logic()
    subject.detach(observer)