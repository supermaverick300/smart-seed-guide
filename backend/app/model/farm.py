from typing import List
from sqlalchemy import Float, String
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.database.connection import Base


class Farm(Base):
    __tablename__ = "farms"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    location: Mapped[str] = mapped_column(String, nullable=False)
    latitude: Mapped[float] = mapped_column(Float, nullable=False)
    longitude: Mapped[float] = mapped_column(Float, nullable=False)
    area: Mapped[float] = mapped_column(Float, nullable=False)
    soil_type: Mapped[str] = mapped_column(String, nullable=False)
    water_availability: Mapped[str] = mapped_column(String, nullable=False)

    recommendations: Mapped[List["Recommendation"]] = relationship(
        back_populates="farm", cascade="all, delete-orphan"
    )