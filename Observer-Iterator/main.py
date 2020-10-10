from observer import Observer, Subject

subject = Subject("TeamSesh Seshskull tee")
observer = Observer()
subject.attach(observer)
subject.logic()
subject.detach(observer)

