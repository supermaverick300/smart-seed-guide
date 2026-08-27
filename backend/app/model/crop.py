# app/models/crop.py
from typing import List
from sqlalchemy import Float, String
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.database.connection import Base


class Crop(Base):
    __tablename__ = "crops"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    name: Mapped[str] = mapped_column(String, nullable=False, index=True)
    season: Mapped[str] = mapped_column(String, nullable=False)
    water_requirement: Mapped[str] = mapped_column(String, nullable=False)
    min_temperature: Mapped[float] = mapped_column(Float, nullable=False)
    max_temperature: Mapped[float] = mapped_column(Float, nullable=False)

    seeds: Mapped[List["Seed"]] = relationship(
        back_populates="crop", cascade="all, delete-orphan"
    )